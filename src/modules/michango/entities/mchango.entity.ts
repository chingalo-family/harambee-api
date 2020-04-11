import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';

@Entity()
export class Mchango extends Identifiable {
  @PrimaryColumn('text', { name: 'id', nullable: false })
  id: string;

  @Column('int', { name: 'amount', nullable: false })
  amount: number;

  @Column('int', { name: 'mass', nullable: true })
  mass: number;
}
