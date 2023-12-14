import { MigrationInterface, QueryRunner } from "typeorm"

export class OrderTable1702520627333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "Orders"(
            "id" SERIAL PRIMARY KEY,
            "quantity" INTEGER NOT NULL,
            "ProductId" INTEGER REFERENCES "Products",
            "UserId" INTEGER REFERENCES "Users",
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS "Orders";
        `)
    }

}
