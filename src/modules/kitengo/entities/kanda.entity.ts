import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';
import { Jumuhiya } from './jumuhiya.entity';
import { Mchango } from '../../michango/entities/mchango.entity';

@Entity()
export class Kanda extends Identifiable {
  @PrimaryColumn('text', { name: 'name', nullable: false })
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
