import { IsDate, IsNumber, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseTable {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  public id: string;

  @Column('timestamp', {
    name: 'created_at',
    select: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column('timestamp', {
    name: 'updated_at',
    select: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
