import { IMessage, NotificationByEmail, NotificationByPhone, NotificationByQueue } from "./decorator";

const message: IMessage = {
    name: "Juan Pérez",
    message: "Hello world",
    date: new Date(),
    email: "juan.perez@email.com",
    phone: "123456789",
    queue: "queue"
}

const notificationByEmail = new NotificationByEmail(message);
//const notificationByPhone = new NotificationByPhone(notificationByEmail);
const notificationByQueue = new NotificationByQueue(notificationByEmail);
notificationByQueue.send()

