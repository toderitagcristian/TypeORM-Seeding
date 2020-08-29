import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { Role } from './role.entity';
import { RolesService } from './roles.services';
import { getConnection } from 'typeorm'

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Role> {
    return this.rolesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.rolesService.remove(id);
  }

  @Post()
  create(@Body() body: any): Promise<Role> {
    return this.rolesService.create(body)
  }
}
