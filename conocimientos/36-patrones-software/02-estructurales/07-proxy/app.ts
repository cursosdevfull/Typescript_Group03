import { AccountProxyBankClientA, AccountSavingBank, TAccountProxy } from "./proxy";

const accountA = new AccountSavingBank(100, "Carlos Silva", 10000)
const accountProxyClientA: TAccountProxy = new AccountProxyBankClientA()
accountProxyClientA.increase(accountA, 1000)
accountProxyClientA.decrease(accountA, 500)
accountProxyClientA.showCash(accountA)

const accountB = new AccountSavingBank(200, "Juan Perez", 1000)
const accountProxyClientB: TAccountProxy = new AccountProxyBankClientA()
accountProxyClientB.increase(accountB, 1000)
accountProxyClientB.decrease(accountB, 200)
accountProxyClientB.showCash(accountB)