class User {
  readonly userId: number;

  constructor(protected name: string, protected email: string) {
    this.userId = Math.floor(Math.random() * 1000);
  }

  properties() {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

class UserTask {
  constructor(
    private userId: number,
    private title: string,
    private category: string
  ) {}
}

class UserSalary {
  private salary: number;

  constructor(
    private user: User,
    private paymentByTask: number,
    quantityTasks: number
  ) {
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
