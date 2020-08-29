import {MigrationInterface, QueryRunner} from "typeorm";

export class RolesColumnNameAttributes1598695233178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `role` ADD UNIQUE(`name`);")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `role` DROP INDEX `name`;")
    }

}
