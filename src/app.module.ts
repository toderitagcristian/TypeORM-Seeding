
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm'
import { UsersModule } from './users/users.module'
import { RolesModule } from './roles/roles.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    RolesModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
