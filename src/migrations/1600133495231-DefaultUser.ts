import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { generateBasicAuthanticationString } from 'src/modules/users/helpers/basic-authentication-toke.helper';

export class DefaultUser1600133495231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `INSERT INTO userrole(name) VALUES ('${process.env.ADMIN_ROLE}');`,
    );
    const adminRole = await queryRunner.query(
      `SELECT id FROM userrole WHERE name = '${process.env.ADMIN_ROLE}'`,
    );

    await queryRunner.query(`
    INSERT INTO users (username, password, token, role) VALUES ('${
      process.env.ADMIN_USERNAME
    }', '${await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10,
    )}', '${generateBasicAuthanticationString(
      process.env.ADMIN_USERNAME,
      process.env.ADMIN_PASSWORD,
    )}', '${adminRole[0].id}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
