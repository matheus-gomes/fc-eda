import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Balance } from "./entity/balance.entity";
import { BalanceRepository } from "./repository/balance.repository";
import { BalanceService } from "./business/balance.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { BalanceController } from "./controller/balance.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Balance]),
    ClientsModule.register([
      {
        name: "KAFKA_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['kafka:29092']
          },
          consumer: {
            groupId: 'balances-consumer-group'
          }
        }
      }
    ])
  ],
  providers: [BalanceRepository, BalanceService],
  exports: [BalanceService],
  controllers: [BalanceController]
})
export class BalanceModule { }