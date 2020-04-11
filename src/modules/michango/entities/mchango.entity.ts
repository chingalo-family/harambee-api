import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Kanda } from 'src/modules/kitengo/entities/kanda.entity';
import { Jumuhiya } from '../../kitengo/entities/jumuhiya.entity';

@Entity()
export class Mchango extends Identifiable {
  @PrimaryColumn('text', { name: 'id', nullable: false })
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
}
