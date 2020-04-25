import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Entity, Column, BeforeInsert, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserRoles } from '../../user-roles/entities/user-role.entity';

@Entity('user')
export class Users extends Identifiable {
  @Column('text', { name: 'username', unique: true })
  username: string;

  @Column('text', { name: 'password' })
  password?: string;

  @ManyToOne(
    type => UserRoles,
    role => role.id,
  )
  userRole: UserRoles;

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
