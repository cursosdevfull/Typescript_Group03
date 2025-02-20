class User {
  constructor(public readonly id: number, public readonly name: string, public readonly password: string, public readonly email: string){}
}

interface UserOperations {
  get(id: number): User | undefined;
  list(): User[];
  add(user: User): void;
}

interface ILogger {
  log(message: string): void
}

class UserDatabase implements UserOperations, ILogger {
  private users: User[] = [];

  get(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  list(): User[] {
    return this.users;
  }

  add(user: User): void {
    this.users.push(user);
  }

  log(message: string): void {
    console.log(message);
  }
}

const userDatabase = new UserDatabase();
userDatabase.add(new User(1, 'John', "12345", "john.doe@email.com"));
userDatabase.add(new User(2, 'Jane', "12345", "jane@email.com"));

console.log(userDatabase.list());
console.log(userDatabase.get(1));