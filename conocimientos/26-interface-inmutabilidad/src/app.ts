class User {
  public readonly id: number
  public readonly name: string
  public readonly password: string
  public readonly email: string

  constructor(props: IUser){
    this.id = props.id
    this.name = props.name
    this.password = props.password
    this.email = props.email
  }
}

interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
}

const userProperties: Readonly<IUser> = {
  id: 1,
  name: 'John',
  password: "123456",
  email: "jdoe@email.com"
}

//userProperties.name = "Luisa"

const user = new User(userProperties)
console.log(user)