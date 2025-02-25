export class AccountSavingBank {
    constructor(private readonly accountId: number, private readonly owner: string, private cash: number) { }

    getCash() {
        return this.cash;
    }

    setCash(cash: number) {
        this.cash = cash;
    }
}

export type TAccountProxy = {
    increase(account: AccountSavingBank, amount: number): void;
    decrease(account: AccountSavingBank, amount: number): void;
    showCash(account: AccountSavingBank): void;
}

export class AccountProxyBankClientA implements TAccountProxy {
    private readonly commision = 0.04;

    increase(account: AccountSavingBank, amount: number): void {
        const cash = account.getCash()
        account.setCash(cash + amount - amount * this.commision)
    }
    decrease(account: AccountSavingBank, amount: number): void {
        const cash = account.getCash()
        account.setCash(cash - amount - amount * this.commision)
    }
    showCash(account: AccountSavingBank): void {
        console.log("Cash in AccountProxyBankClientA", account.getCash())
    }
}

export class AccountProxyBankClientB implements TAccountProxy {
    private readonly commision = 0.02;
    private readonly feeIncrease = 1
    private readonly feeDecrease = 4

    increase(account: AccountSavingBank, amount: number): void {
        const cash = account.getCash()
        account.setCash(cash + amount - amount * this.commision - this.feeIncrease)
    }
    decrease(account: AccountSavingBank, amount: number): void {
        const cash = account.getCash()
        account.setCash(cash - amount - amount * this.commision - this.feeDecrease)
    }
    showCash(account: AccountSavingBank): void {
        console.log("Cash in AccountProxyBankClientB", account.getCash())
    }
}
