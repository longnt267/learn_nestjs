import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnRoleUsersTable1669954962368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({ name: 'role', type: 'enum', enum: ['user', 'admin'] }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
