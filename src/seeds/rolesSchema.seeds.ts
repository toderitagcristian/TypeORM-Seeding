import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Role from '../roles/role.schema'

export default class RolesSchemaSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Role)().createMany(3)
  }
}