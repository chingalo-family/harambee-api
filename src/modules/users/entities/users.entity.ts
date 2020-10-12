import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Entity, Column, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserRoles } from '../../user-roles/entities/user-role.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

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
  @JoinColumn({ name: 'role' })
  userRole: UserRoles;

  public static getBase64(username: string, password: string) {
    return Buffer.from(username + ':' + password).toString('base64');
  }

  public static async authenticateUserByToken(token: string): Promise<Users> {
    try {
      let user: Users;
      user = await Users.findOne({
        where: { token },
      });
      if (user) {
        delete user.token;
        return user;
      }
    } catch (e) {
      throw new HttpException(
        'Incorrect username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  toResponseObject(showToken: boolean = false) {
    const { id, created, username, token } = this;

    let responseObject: any = { id, created, username };

    if (showToken) {
      responseObject = { ...responseObject, token };
    }

    return responseObject;
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
