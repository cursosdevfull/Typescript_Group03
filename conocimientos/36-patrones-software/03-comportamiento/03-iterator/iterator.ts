export type Iterator<T> = {
    next(): T,
    hasNext(): boolean
}

export type Aggregator<T> = {
    createIterator(): Iterator<T>
}

export class Notification {
    constructor(private readonly topic: string, private readonly payload: Record<string, any>) { }
}

export class ImplementIterator implements Iterator<Notification> {
    currentPosition = 0
    totalNotifications: number

    constructor(private readonly collection: Map<number, Notification>) {
        this.totalNotifications = collection.size
    }

    next(): Notification {
        const notification: Notification = this.collection.get(this.currentPosition) as Notification
        this.currentPosition++
        return notification
    }

    hasNext(): boolean {
        return this.currentPosition < this.totalNotifications
    }
}

export class NotificationsPending implements Aggregator<Notification> {
    private readonly collection: Map<number, Notification> = new Map()

    add(notification: Notification) {
        const size = this.collection.size
        this.collection.set(size + 1, notification)
    }

    createIterator(): Iterator<Notification> {
        return new ImplementIterator(this.collection)
    }

}