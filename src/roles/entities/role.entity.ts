import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => User, (user) => user.role, {
    onDelete: 'CASCADE',
  })
  users: User[];

  @Column({ default: true })
  isActive: boolean;
}
