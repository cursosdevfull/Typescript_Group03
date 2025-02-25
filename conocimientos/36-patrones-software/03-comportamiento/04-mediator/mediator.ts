export type Action = {
    sent(to: string, payload: Record<string, any>): void
    receive(from: string, payload: Record<string, any>): void
}

export type TMediator = {
    register(member: Member): void
    sent(from: string, to: string, payload: Record<string, any>): void
}

export class Member implements Action {
    constructor(private readonly name: string, private readonly mediator: TMediator) {
    }

    sent(to: string, payload: Record<string, any>): void {
        this.mediator.sent(this.name, to, payload)
    }

    receive(from: string, payload: Record<string, any>): void {
        console.log(`Message received from ${from}: ${JSON.stringify(payload)}`)
    }

    getName(): string {
        return this.name
    }
}

export class Mediator implements TMediator {
    private members: { [s: string]: any } = {}

    register(member: Member): void {
        if (!this.members.hasOwnProperty(member.getName()))
            this.members[member.getName()] = member
    }

    sent(from: string, to: string, payload: Record<string, any>): void {
        const member = this.members[to]
        member?.receive(from, payload)
    }
}