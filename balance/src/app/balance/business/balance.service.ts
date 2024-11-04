import { Injectable } from "@nestjs/common";
import { BalanceRepository } from "../repository/balance.repository";
import { BalanceInputDTO, BalanceOutputDTO } from "../dto/balance.dto";
import { Balance } from "../entity/balance.entity";

@Injectable()
export class BalanceService {
  constructor(
    private readonly balanceRepository: BalanceRepository
  ) { }

  async save(balanceDTO: BalanceInputDTO) {
    const balanceFrom: Balance = new Balance();
    balanceFrom.accountId = balanceDTO.account_id_from;
    balanceFrom.balance = balanceDTO.balance_account_id_from;

    await this.balanceRepository.save(balanceFrom);

    const balanceTo: Balance = new Balance();
    balanceTo.accountId = balanceDTO.account_id_to;
    balanceTo.balance = balanceDTO.balance_account_id_to;

    await this.balanceRepository.save(balanceTo);
  }

  async getByAccountId(accountId: string): Promise<BalanceOutputDTO> {
    const balanceDB = await this.balanceRepository.getByAccountId(accountId);

    if (!balanceDB) {
      throw new Error("Balance not found for account")
    }

    const balanceOutput = new BalanceOutputDTO();

    balanceOutput.accountId = balanceDB.accountId;
    balanceOutput.balance = balanceDB.balance;

    return balanceOutput;
  }
}