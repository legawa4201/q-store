import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductTable1702520087702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "Products"(
            "id" SERIAL PRIMARY KEY,
            "productName" VARCHAR NOT NULL,
            "stock" INTEGER NOT NULL,
            "productType" VARCHAR CHECK("productType" IN ('Konsumsi', 'Pembersih')),
            "UserId" INTEGER REFERENCES "Users",
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS "Products";
        `)
    }

}
