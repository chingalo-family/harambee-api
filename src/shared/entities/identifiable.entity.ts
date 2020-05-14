import {
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  BeforeUpdate,
  BaseEntity,
} from 'typeorm';
import { generateId } from '../helpers/id-generator.helper';

export class Identifiable extends BaseEntity {
  @PrimaryColumn({ name: 'id', nullable: false, type: 'varchar', length: 256 })
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created',
    default: () => 'LOCALTIMESTAMP',
  })
  created: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'lastupdated',
    default: () => 'LOCALTIMESTAMP',
  })
  lastUpdated: Date;

  @BeforeInsert()
  beforeInsertTransaction() {
    this.created = new Date();
    this.lastUpdated = new Date();
    this.id = generateId();
  }

  @BeforeUpdate()
  beforeUpdateTransaction() {
    this.lastUpdated = new Date();
  }
}
