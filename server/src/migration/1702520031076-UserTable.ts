import { MigrationInterface, QueryRunner } from "typeorm"

export class UserTable1702520031076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "Users"(
            "id" SERIAL PRIMARY KEY,
            "username" VARCHAR NOT NULL UNIQUE,
            "password" VARCHAR NOT NULL,
            "role" VARCHAR NOT NULL CHECK("role" in ('admin', 'customer'))
        );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS "Users";
        `)
    }

}
