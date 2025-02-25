import { Notification, NotificationsPending, Iterator } from "./iterator";

const notifications = new NotificationsPending()
notifications.add(new Notification("LOAD_INDIVIDUAL", { campaing: "202012" }))
notifications.add(new Notification("LOAD_INDIVIDUAL", { campaing: "202101" }))
notifications.add(new Notification("LOAD_INDIVIDUAL", { campaing: "202102" }))
notifications.add(new Notification("LOAD_GROUP", { campaing: "202103" }))
notifications.add(new Notification("LOAD_GROUP", { campaing: "202104" }))
notifications.add(new Notification("LOAD_GROUP", { campaing: "202105" }))
notifications.add(new Notification("LOAD_INDIVIDUAL", { campaing: "202108" }))


const it: Iterator<Notification> = notifications.createIterator()

while (it.hasNext()) {
    const notification = it.next()
    console.log(notification)
}