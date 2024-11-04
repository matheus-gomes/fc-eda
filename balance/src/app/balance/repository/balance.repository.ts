import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Balance } from "../entity/balance.entity";

@Injectable()
export class BalanceRepository extends Repository<Balance> {
  constructor(
    @InjectRepository(Balance)
    private balanceRepository: Repository<Balance>
  ) {
    super(balanceRepository.target, balanceRepository.manager, balanceRepository.queryRunner)
  }

  getByAccountId(accountId: string): Promise<Balance> {
    return this.findOne({
      where: {
        accountId: accountId
      }
    })
  }
}