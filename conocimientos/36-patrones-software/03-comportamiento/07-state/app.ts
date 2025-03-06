import { ManagerNotification, Notification } from "./state";

type NotificationProduct = {
    products: string[];
}

const manager = new ManagerNotification<NotificationProduct>();
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product1"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product2"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product3"] }))

manager.busy();

manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product4"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product5"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product6"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product7"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product8"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product9"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product10"] }))

manager.available();

manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product11"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product12"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product13"] }))
manager.execute(new Notification<NotificationProduct>("LOAD_INDIVIDUAL_PRODUCT", { products: ["product14"] }))