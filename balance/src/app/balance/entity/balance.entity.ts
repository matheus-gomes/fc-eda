import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("balances")
export class Balance {
  @PrimaryColumn({ name: 'account_id' })
  accountId: string;

  @Column({ name: 'balance' })
  balance: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

}