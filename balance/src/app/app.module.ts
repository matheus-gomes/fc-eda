import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from './balance/entity/balance.entity';
import { BalanceModule } from './balance/balance.module';
import { config } from 'src/config/database';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    BalanceModule
  ],
})
export class AppModule {}
