import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from './shared/config/config.module';

@Module({
    imports: [DatabaseModule, ConfigModule, UsersModule, AuthModule],
    providers: [],
})
export class AppModule {}
