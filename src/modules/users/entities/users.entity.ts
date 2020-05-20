import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Entity, Column, BeforeInsert, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserRoles } from '../../user-roles/entities/user-role.entity';

@Entity('users')
export class Users extends Identifiable {
  @Column('text', { name: 'username', unique: true })
  username: string;

  @Column('text', { name: 'password' })
  password?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
  })
  token: string;

  @ManyToOne(
    type => UserRoles,
    role => role.id,
  )
  userRole: UserRoles;

  public static getBase64(username: string, password: string) {
    return Buffer.from(username + ':' + password).toString('base64');
  }

  public static async authenticateUserByToken(token: string): Promise<Users> {
    let user: Users;
    user = await Users.findOne({
      where: { token },
    });
    if (user) {
      delete user.token;
      return user;
    }
  }

  @BeforeInsert()
  async createToken() {
    this.token = await Users.getBase64(this.username, this.password);
  }

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
