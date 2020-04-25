import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class Users extends Identifiable {
  @Column('text', { name: 'username', unique: true })
  username: string;

  @Column('text', { name: 'password' })
  password?: string;

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
