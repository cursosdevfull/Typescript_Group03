export type IMessageBase = {
    name: string;
    message: string;
    date: Date;
}

export type IMessageEmail = IMessageBase & { email: string };
export type IMessagePhone = IMessageBase & { phone: string };
export type IMessageQueue = IMessageBase & { queue: string };

export type IMessage = IMessageEmail | IMessagePhone | IMessageQueue;


export abstract class Notification {
    message!: IMessage;
    abstract send(): void;
}

export class NotificationByEmail extends Notification {
    constructor(public message: IMessage) {
        super();
    }

    send(): void {
        console.log(`Sending email to ${(this.message as IMessageEmail).email}`);
    }
}

export class NotificationByPhone extends Notification {
    constructor(public notification: Notification) {
        super();
        this.message = notification.message;
    }

    send(): void {
        this.notification.send()
        console.log(`Sending SMS to ${(this.message as IMessagePhone).phone}`);
    }
}

export class NotificationByQueue extends Notification {
    constructor(public notification: Notification) {
        super();
        this.message = notification.message;
    }

    send(): void {
        this.notification.send()
        console.log(`Sending to queue ${(this.message as IMessageQueue).queue}`);
    }
}