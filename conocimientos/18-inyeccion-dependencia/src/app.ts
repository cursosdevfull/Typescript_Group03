class User {
  readonly userId: number;
  protected name: string;
  protected email: string;

  constructor(name: string, email: string) {
    this.userId = Math.floor(Math.random() * 1000);
    this.name = name;
    this.email = email;
  }

  properties() {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

class UserTask {
  private userId: number;
  private title: string;
  private category: string;

  constructor(userId: number, title: string, category: string) {
    this.userId = userId;
    this.title = title;
    this.category = category;
  }
}

class UserSalary {
  private salary: number;
  private paymentByTask: number;
  private user: User;

  constructor(user: User, paymentByTask: number, quantityTasks: number) {
    this.user = user;
    this.paymentByTask = paymentByTask;
    this.salary = paymentByTask * quantityTasks;
  }

  getSalary() {
    return this.salary;
  }

  getInfo() {
    return `Name: ${this.user.properties().name}, Email: ${
      this.user.properties().email
    }, Salary: ${this.salary}`;
  }
}

const user = new User("John Doe", "john.doe@email.com");
const tasksByUser = [
  new UserTask(user.userId, "Task 1", "Category 1"),
  new UserTask(user.userId, "Task 2", "Category 2"),
  new UserTask(user.userId, "Task 3", "Category 3"),
];
const userSalary = new UserSalary(user, 100, 50);
const salary = userSalary.getSalary();

console.log(salary);
console.log(userSalary.getInfo());
