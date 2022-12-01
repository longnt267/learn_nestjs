import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1669793405434 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: "increment" },
                    { name: 'user_name', type: 'varchar' },
                    { name: 'password', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
