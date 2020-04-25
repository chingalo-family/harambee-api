import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Users } from '../../users/entities/users.entity';

@Entity('userrole')
export class UserRoles extends Identifiable {
  @Column('text', { name: 'username', unique: true })
  name: string;

  @OneToMany(
    type => Users,
    user => user.id,
  )
  users: Users[];
}
