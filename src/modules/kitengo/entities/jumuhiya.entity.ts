import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Kanda } from './kanda.entity';
import { Mchango } from 'src/modules/michango/entities/mchango.entity';

@Entity()
export class Jumuhiya extends Identifiable {
  @Column({
    name: 'name',
    nullable: false,
    type: 'varchar',
    length: 200,
    unique: true,
  })
  name: string;

  @ManyToOne(
    type => Kanda,
    kanda => kanda.jumuhiya,
  )
  kanda: Kanda;

  @OneToMany(
    type => Mchango,
    mchango => mchango.id,
  )
  mchango: Mchango[];
}
