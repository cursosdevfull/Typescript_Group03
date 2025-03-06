import { User, Subject, ManagerSubscription, ManagerBilling, UserProps } from './observer';

const subject = new Subject<User>();

const observerManagerSubscription = new ManagerSubscription();
const observerManagerBilling = new ManagerBilling();

subject.register(observerManagerSubscription);
subject.register(observerManagerBilling);

const userProps: UserProps = { name: 'John Doe', email: 'john.doe@email.com', age: 30 };
const user = new User(userProps, subject)

user.save()

user.update({ name: 'Jane Doe', email: 'jane.doe@email.com', age: 25 })
user.delete()


