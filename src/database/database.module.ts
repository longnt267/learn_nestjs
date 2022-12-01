import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get<string>('MYSQL_HOST'),
          port: configService.get<number>('MYSQL_PORT'),
          username: configService.get<string>('MYSQL_USER'),
          password: configService.get<string>('MYSQL_PASSWORD'),
          database: configService.get<string>('MYSQL_DB'),
          entities: [__dirname + '/../modules/entities/*.entity{.ts,.js}'],
          logging: false,
          migrations: ['dist/src/database/migrations/*{.ts,.js}'],
          namingStrategy: new SnakeNamingStrategy(),
          charset: 'utf8mb4',
          collation: 'utf8mb_general_ci',
          ssl:
            configService.get<string>('ENVIRONMENT') != 'local'
              ? {
                  rejectUnauthorized: false,
                  migrationsRun: true,
                }
              : false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
