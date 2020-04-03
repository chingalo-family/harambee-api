import { BeforeInsert, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Identifiable {
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
  }
}
