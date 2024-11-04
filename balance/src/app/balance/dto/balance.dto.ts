export class BalanceInputDTO {
  account_id_from: string;
  account_id_to: string;
  balance_account_id_from: number;
  balance_account_id_to: number;
}

export class BalanceOutputDTO {
  accountId: string;
  balance: number;
}

export class BalanceKafkaInputDTO {
  Name: string;
  Payload: BalanceInputDTO;
}