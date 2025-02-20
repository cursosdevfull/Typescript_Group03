interface Controller {
  title: string
  type: string
}

interface Routes {
  [key: string]: new (...args: any[]) => any
}

class HomeController implements Controller {
  title: string
  type: string

  constructor(title: string, type: string){
    this.title = title
    this.type = type
  }
}

class AboutController implements Controller {
  title: string
  type: string

  constructor(title: string, type: string){
    this.title = title
    this.type = type
  }
}

class ContactController implements Controller {
  title: string
  type: string

  constructor(title: string, type: string){
    this.title = title
    this.type = type
  }
}

const routes:Routes = {
  "/": HomeController,
  "/about": AboutController,
  "/contact": ContactController
}