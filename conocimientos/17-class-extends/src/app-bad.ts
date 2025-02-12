class User2 {
  readonly userId: number;
  protected name: string;
  protected email: string;

  constructor(name: string, email: string) {
    this.userId = Math.floor(Math.random() * 1000);
    this.name = name;
    this.email = email;
  }
}

/* class UserTask {
  private userId: number;
  private title: string;
  private category: string;

  constructor(userId: number, title: string, category: string) {
    this.userId = userId;
    this.title = title;
    this.category = category;
  }
} */

class UserSalary2 extends User2 {
  private salary: number;
  private paymentByTask: number;

  constructor(
    name: string,
    email: string,
    paymentByTask: number,
    quantityTasks: number
  ) {
    super(name, email);
    this.paymentByTask = paymentByTask;
    this.salary = paymentByTask * quantityTasks;
  }

  getSalary() {
    return this.salary;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Salary: ${this.salary}`;
  }
}

/* const user = new User("John Doe", "john.doe@email.com");
const tasksByUser = [
  new UserTask(user.userId, "Task 1", "Category 1"),
  new UserTask(user.userId, "Task 2", "Category 2"),
  new UserTask(user.userId, "Task 3", "Category 3"),
]; */
const userSalary2 = new UserSalary2("John Doe", "john.doe@email.com", 100, 50);
const salary2 = userSalary.getSalary();

console.log(salary2);
console.log(userSalary2.getInfo());
