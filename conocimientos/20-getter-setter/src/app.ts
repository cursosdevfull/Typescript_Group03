class Accounting {
  private _people: string[] = [];

  set addPerson(name: string) {
    this._people.push(name);
  }

  get getPeople() {
    return this._people;
  }

  set people(names: string[]) {
    this._people = [...this._people, ...names];
  }

  get people() {
    return this._people;
  }
}

const accounting = new Accounting();
accounting.addPerson = "John Doe";
accounting.addPerson = "Jane Doe";
accounting.addPerson = "Doe Doe";

accounting.people = ["Pieri", "Piero", "Pierina"];

console.log(accounting.people);
/*accounting.addPerson("John Doe");
accounting.addPerson("Jane Doe");
accounting.addPerson("Doe Doe");

console.log(accounting.getPeople());*/
