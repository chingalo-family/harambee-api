import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/users.entity';

@Entity('userrole')
export class UserRoles extends Identifiable {
  @Column('text', { name: 'name', unique: true })
  name: string;

  @OneToMany(
    type => User,
    user => user.id,
  )
  users: User[];
}
