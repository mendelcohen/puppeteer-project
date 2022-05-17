import { MigrationInterface, QueryRunner } from "typeorm";

export class isSponsored1652725746493 implements MigrationInterface {
    name = 'isSponsored1652725746493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hard_drive" RENAME COLUMN "isSponsor" TO "isSponsored"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hard_drive" RENAME COLUMN "isSponsored" TO "isSponsor"`);
    }

}
