export class Notification<T> {
    constructor(private readonly topic: string, private readonly payload: T) { }

    getTopic(): string {
        return this.topic;
    }

    getPayload(): T {
        return this.payload;
    }
}

export abstract class AbstractState<T> {
    abstract execute(notification: Notification<T>): void
}

export class BehaviorStateAvailable<T> extends AbstractState<T> {
    execute(notification: Notification<T>): void {
        console.log("Server is ready. Process started")
        console.log("Processing notification: ", notification.getTopic(), notification.getPayload())
    }
}

export class BehaviorStateBusy<T> extends AbstractState<T> {
    execute(notification: Notification<T>): void {
        console.log("Server is busy")
        console.log("Notification is queued: ", notification.getTopic(), notification.getPayload())
    }
}

export class HandlerBehaviour<T> {
    private currentBehavior: AbstractState<T>

    constructor() {
        this.currentBehavior = new BehaviorStateAvailable();
    }

    busy() {
        this.currentBehavior = new BehaviorStateBusy();
    }

    available() {
        this.currentBehavior = new BehaviorStateAvailable();
    }

    execute(notification: Notification<T>) {
        this.currentBehavior.execute(notification);
    }
}

export class ManagerNotification<T> {
    private handlerBehaviour: HandlerBehaviour<T>;

    constructor() {
        this.handlerBehaviour = new HandlerBehaviour();
    }

    execute(notification: Notification<T>) {
        this.handlerBehaviour.execute(notification);
    }

    available() {
        this.handlerBehaviour.available();
    }

    busy() {
        this.handlerBehaviour.busy();
    }
}
