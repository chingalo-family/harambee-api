import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Kanda } from 'src/modules/kitengo/entities/kanda.entity';
import { Jumuhiya } from '../../kitengo/entities/jumuhiya.entity';
import { generateId } from 'src/shared/helpers/id-generator.helper';

@Entity()
export class Mchango extends Identifiable {
  @PrimaryColumn({ name: 'id', nullable: false, type: 'varchar', length: 256 })
  id: string;

  @Column('int', { name: 'amount', nullable: false })
  amount: number;

  @Column('int', { name: 'mass', nullable: true })
  mass: number;

  @ManyToOne(
    type => Kanda,
    kanda => kanda.mchango,
    {
      nullable: true,
    },
  )
  kanda: Kanda;

  @ManyToOne(
    type => Jumuhiya,
    jumuhiya => jumuhiya.mchango,
    {
      nullable: true,
    },
  )
  jumuhiya: Jumuhiya;

  @BeforeInsert()
  beforeInsertMchango() {
    this.id = generateId();
  }
}
