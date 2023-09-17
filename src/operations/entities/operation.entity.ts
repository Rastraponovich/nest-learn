import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Operation {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'uuid' })
  guid: string;

  @Column({ type: 'timestamp without time zone' })
  ShiftDate: string;

  @Column({ type: 'timestamp without time zone' })
  DateTime: string;

  @Column()
  RestCode: number;

  @Column({ enum: [5, 4, 24] })
  Situation: number;

  @Column()
  name: string;

  @Column()
  seqnumber: number;

  @Column({ nullable: true, type: 'jsonb' })
  Server: object;
  @Column({ nullable: true, type: 'jsonb' })
  ChangeLog: object;
}
