interface Repository {
  id: number
  username: string
  password: string
  email: string
}

interface UserRepository extends Repository {
  findByUsername(username: string): any
}

class UserDatabase implements UserRepository {
  id: number
  username: string
  password: string
  email: string
  
  constructor(props: UserRepository) {
    this.id = props.id
    this.username = props.username
    this.password = props.password
    this.email = props.email
  }


  findByUsername(username: string) {
    throw new Error("Method not implemented.")
  }
}