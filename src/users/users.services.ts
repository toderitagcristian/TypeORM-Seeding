
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
import { User } from './user.entity';
import { Role } from 'src/roles/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(body: any): Promise<User> {
    const user = new User();

    user.firstName = body.firstName;
    user.lastName = body.lastName;

    await this.usersRepository.save(user)

    let bodyRoles = body.roles || null

    if (!bodyRoles) {
      bodyRoles = ['client']
    } else if (!bodyRoles.includes('client')) {
      bodyRoles.push('client')
    }

    const entityManager = getManager();
    for (const el of bodyRoles) {
      const role = await entityManager.findOne(Role, {where: { name: el}});
      await getConnection()
      .createQueryBuilder()
      .relation('user', "roles")
      .of(user)
      .add(role);
    }

    return entityManager.findOne(User, user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}