interface IUser {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string
}

class User {
  private readonly id: number
  private name: string
  private username: string
  private password:  string
  private readonly email: string

  constructor(props: IUser){
    this.id = props.id
    this.name = props.name
    this.username = props.username
    this.password = props.password
    this.email = props.email
  }

  /*updateId() {
    this.id = 10
  }*/
}

const userProperties: IUser = {
  id: 1,
  name: 'John',
  username: 'doe',
  password: "123456",
  email: "john.doe@email.com"
}

const user = new User(userProperties)
// user.updateId()
console.log(user)
