import { Exclude } from 'class-transformer';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ generated: 'increment' })
  user_Id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  user_name: string;

  @Exclude()
  @Column({ nullable: true })
  currentHashedRefreshToken?: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: 'CASCADE',
  })
  role: Role;

  @Column({ default: true })
  is_active: boolean;
}
