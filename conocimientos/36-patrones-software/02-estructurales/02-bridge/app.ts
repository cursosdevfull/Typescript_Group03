import { IQueue, Kafka, Mqtt, Nas, NotificationTicketGig, QueueAbstract, Rabbitmq, Sqs, Ticket } from "./bridge";

const kafkaRepository: IQueue = new Kafka();
const nasRepository: IQueue = new Nas();
const sqsRepository: IQueue = new Sqs();
const rabbitmqRepository: IQueue = new Rabbitmq();
const mqttRepository: IQueue = new Mqtt();

const ticket: Ticket = { name: "Karla Pezet", zone: "Gig" };

const notification: QueueAbstract = new NotificationTicketGig(kafkaRepository);
notification.sentTicket(ticket)
    .then(response => console.log(`Status ticket in queue: ${response ? "enqueued" : "rejected"}`))
    .catch(console.error);