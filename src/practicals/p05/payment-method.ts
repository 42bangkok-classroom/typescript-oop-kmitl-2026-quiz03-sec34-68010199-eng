import { Payable } from "./payable";

export abstract class PaymentMethod implements Payable {
  protected accountName: string;

  constructor(accountName: string) {
    this.accountName = accountName;
  }

  public getAccountName(): string {
    return this.accountName;
  }

  abstract processPayment(amount: number): boolean;
  abstract getPaymentFee(amount: number): number;
}