import { Controller, Get, Param } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { BalanceService } from "../business/balance.service";
import { BalanceKafkaInputDTO } from "../dto/balance.dto";

@Controller('balances')
export class BalanceController {
  constructor(private balanceService: BalanceService) {}

  @EventPattern(process.env.KAFKA_TOPIC)
  async handleKafkaMessage(@Payload() message: BalanceKafkaInputDTO) {
    this.balanceService.save(message.Payload);
  }

  @Get(':accountId')
  async getByAccountId(@Param('accountId') accountId: string) {
    return this.balanceService.getByAccountId(accountId);
  }
}