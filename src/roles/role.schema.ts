import {EntitySchema} from "typeorm";
import { User } from '../users/user.entity'

export default interface Role {
  id: number;
  name: string;
  users: User[];
}

export default class Role{}

export const RoleSchema = new EntitySchema<Role>({
    name: "role",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
            unique: true,
        },
    },
    relations: {
      users: {
        type: 'many-to-many',
        target: 'User'
      }
    }
});