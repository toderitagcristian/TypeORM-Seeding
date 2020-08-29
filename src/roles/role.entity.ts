import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from '../users/user.entity'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  unique: true;

  @ManyToMany(() => User, (user: User) => user.roles, {cascade:['insert', 'update']})
  public users: User[];
}
