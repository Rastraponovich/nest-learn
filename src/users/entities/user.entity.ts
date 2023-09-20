import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ generated: 'increment' })
  userId: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: 'CASCADE',
  })
  role: Role;

  @Column({ default: true })
  isActive: boolean;
}
