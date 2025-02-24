export type Ticket = {
    name: string;
    zone: string;
}

export type IQueue = {
    sent(ticket: Ticket): Promise<boolean>;
}

export class Nas implements IQueue {
    async sent(ticket: Ticket): Promise<boolean> {
        console.log(`Ticket sent to ${ticket.zone} by Nas`);
        return true;
    }
}

export class Sqs implements IQueue {
    async sent(ticket: Ticket): Promise<boolean> {
        console.log(`Ticket sent to ${ticket.zone} by Sqs`);
        return true;
    }
}

export class Kafka implements IQueue {
    async sent(ticket: Ticket): Promise<boolean> {
        console.log(`Ticket sent to ${ticket.zone} by Kafka`);
        return true;
    }
}

export class Rabbitmq implements IQueue {
    async sent(ticket: Ticket): Promise<boolean> {
        console.log(`Ticket sent to ${ticket.zone} by Rabbitmq`);
        return true;
    }
}

export class Mqtt implements IQueue {
    async sent(ticket: Ticket): Promise<boolean> {
        console.log(`Ticket sent to ${ticket.zone} by Mqtt`);
        return true;
    }
}

export abstract class QueueAbstract {
    constructor(protected readonly queue: IQueue) { }
    abstract sentTicket(ticket: Ticket): Promise<boolean>;
}

export class NotificationTicketGig extends QueueAbstract {
    constructor(queue: IQueue) {
        super(queue);
    }

    async sentTicket(ticket: Ticket): Promise<boolean> {
        return this.queue.sent(ticket);
    }
}

export class NotificationTicketLottery extends QueueAbstract {
    constructor(queue: IQueue) {
        super(queue);
    }

    async sentTicket(ticket: Ticket): Promise<boolean> {
        return this.queue.sent(ticket);
    }
}