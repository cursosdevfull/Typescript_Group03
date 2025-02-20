abstract class BaseComponent {
  abstract dataOriginal: string[]
  totalRecords = 0
  
  pageSize = 15
  currentPage = 0

  static getCurrentDate(): string {
    throw new Error("Method not implemented.");
    
  }

  constructor(public org: string) {

  }

  getPage(page: number): string[] {
    this.totalRecords = this.dataOriginal.length
    const start = page * this.pageSize
    const end = start + this.pageSize
    this.currentPage = page
    this.showNotification(`Showing page ${page + 1} of ${Math.ceil(this.totalRecords / this.pageSize)}`)
    return this.dataOriginal.slice(start, end)
  }

  abstract showNotification(message: string): void
}

class UserComponent extends BaseComponent {
  // necesito implementar la propiedad data con al menos 50 nombres
  dataOriginal = [
    'Jhon Doe',
    'Jane Doe',
    'Bruce Wayne',
    'Clark Kent',
    'Peter Parker',
    'Tony Stark',
    'Steve Rogers',
    'Natasha Romanoff',
    'Wanda Maximoff',
    'Carol Danvers',
    'TChalla',
    'Scott Lang',
    'Stephen Strange',
    'Vision',
    'Sam Wilson',
    'Bucky Barnes',
    'Thor',
    'Loki',
    'Hulk',
    'Black Panther',
    'Spiderman',
    'Captain Marvel',
    'Antman',
    'Doctor Strange',
    'Scarlet Witch',
    'Black Widow',
    'Hawkeye',
    'Falcon',
    'Winter Soldier',
    'War Machine',
    'Star Lord',
    'Gamora',
    'Rocket',
    'Groot',
    'Drax',
    'Mantis',
    'Nebula',
    'Captain America',
  ]

  constructor() {
    super('Users')
  }

  static getCurrentDate(): string {
    return new Date().toISOString()
  }

  showNotification(message: string): void {
    console.log(`Notification: ${message}`)
  }

  changePage(page: number): void {
    this.getPage(page)
  }

}

//const base = new BaseComponent(); // Error: Cannot create an instance of an abstract class.

const user = new UserComponent(); // OK
user.changePage(0) // OK

console.log(UserComponent.getCurrentDate()) // OK