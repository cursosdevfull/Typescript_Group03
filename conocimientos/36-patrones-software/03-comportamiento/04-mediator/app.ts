import { Mediator, Member } from "./mediator";

const mediator = new Mediator()
const member1 = new Member("LKT", mediator)
const member2 = new Member("SB3", mediator)
const member3 = new Member("CATALOG", mediator)

mediator.register(member1)
mediator.register(member2)
mediator.register(member3)

member1.sent("SB3", { message: "Hello SB3" })
member2.sent("CATALOG", { message: "Hello CATALOG" })
member3.sent("SB3", { message: "Catalog" })