class Database {
  static host: string;
  static protocol: string;
  static port: number;
  static user: string;
  static password: string;

  /* constructor(
    host: string,
    protocol: string,
    port: number,
    user: string,
    password: string
  ) {
    this.host = host;
    this.protocol = protocol;
    this.port = port;
    this.user = user;
    this.password = password;
  } */

  static get connection() {
    return `mysql://${this.user}:${this.password}@${this.host}:${this.port}`;
  }

  static get closeConnection() {
    return `Connection closed`;
  }
}

Database.host = "localhost";
Database.protocol = "mysql";
Database.port = 3306;
Database.user = "user";
Database.password = "password";

console.log("connection", Database.connection);
console.log("status", Database.closeConnection);

/* const db = new Database("localhost", "mysql", 3306, "user", "password");
console.log("connection", db.connection);
console.log("status", db.closeConnection); */
