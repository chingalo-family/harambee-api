import { Entity, Column, OneToMany } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Jumuhiya } from './jumuhiya.entity';
import { Mchango } from '../../michango/entities/mchango.entity';

@Entity()
export class Kanda extends Identifiable {
  @Column({ name: 'name', nullable: false, type: 'varchar', length: 200 })
  name: string;

  @OneToMany(
    type => Jumuhiya,
    jumuhiya => jumuhiya.name,
  )
  jumuhiya: Jumuhiya[];

  @OneToMany(
    type => Mchango,
    mchango => mchango.id,
  )
  mchango: Mchango[];
}
