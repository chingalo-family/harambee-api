import {
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { generateId } from '../helpers/id-generator.helper';

export class Identifiable {
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
  }

  @BeforeInsert()
  beforeUpdateTransaction() {
    this.lastUpdated = new Date();
    this.id = generateId();
  }
}
