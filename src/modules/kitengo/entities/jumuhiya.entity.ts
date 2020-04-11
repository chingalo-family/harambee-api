import { Entity, PrimaryColumn } from 'typeorm';
import { Identifiable } from '../../../shared/entities/identifiable.entity';

@Entity()
export class Jumuhiya extends Identifiable {
  @PrimaryColumn('text', { name: 'name', nullable: false })
  name: string;
}
