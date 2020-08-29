import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Role } from '../roles/role.entity'

export default class RolesBasicSeeder implements Seeder {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async run(factory: Factory, connection: Connection): Promise<void> {
    
    let rolesArray: any
    rolesArray = ['client', 'admin', 'operator', 'manager', 'bugCatcher']
    rolesArray = rolesArray.map(el => {return { name: el } })

    await connection
      .createQueryBuilder()
      .insert()
      .orIgnore()
      .into(Role)
      .values(rolesArray)
      .execute()
  }
}