type Action = 'create' | 'update' | 'delete';

abstract class Observer<T> {
    abstract notify(action: Action, value: T): void;
}

export class Subject<T> {
    private observers: Observer<T>[] = [];

    register(observer: Observer<T>): void {
        this.observers.push(observer);
    }

    unregister(observer: Observer<T>): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(action: Action, value: T): void {
        this.observers.forEach(observer => observer.notify(action, value));
    }
}

export type UserProps = {
    name: string;
    email: string;
    age: number;
}

export class User {
    private name: string;
    private email: string;
    private age: number;
    private createdAt: Date;
    private updatedAt: Date | undefined;
    private deletedAt: Date | undefined;

    constructor(props: UserProps, private readonly subject: Subject<User>) {
        this.name = props.name;
        this.email = props.email;
        this.age = props.age;

        this.createdAt = new Date();
    }

    save(): void {
        this.subject.notify("create", this);
    }

    update(props: Partial<UserProps>): void {
        this.name = props.name ?? this.name;
        this.email = props.email ?? this.email;
        this.age = props.age ?? this.age;
        this.updatedAt = new Date();

        this.subject.notify("update", this);
    }

    delete(): void {
        this.deletedAt = new Date();
        this.subject.notify("delete", this);
    }

    get properties() {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt
        }
    }
}

export class ManagerSubscription extends Observer<User> {
    notify(action: Action, value: User): void {
        switch (action) {
            case "create":
                console.log(`User ${value.properties.name} created`);
                break;
            case "update":
                console.log(`User ${value.properties.name} updated`);
                break;
            case "delete":
                console.log(`User ${value.properties.name} deleted`);
                break;
        }
    }
}

export class ManagerBilling extends Observer<User> {
    notify(action: Action, value: User): void {
        switch (action) {
            case "create":
                console.log(`Billing user ${value.properties.name}`);
                break;
            case "update":
                console.log(`Billing user ${value.properties.name}`);
                break;
            case "delete":
                console.log(`Billing user ${value.properties.name}`);
                break;
        }
    }

}