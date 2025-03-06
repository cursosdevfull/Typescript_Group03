export type Profile = "professor" | "student" | "researcher";
export type State = "new" | "used" | "old";

export type TBook = {
    id: number;
    title: string;
    state: State
    isAvailable: boolean;
}

export class BookStore {
    private static list: TBook[] = [
        { id: 1, title: "NodeJS", state: "new", isAvailable: true },
        { id: 2, title: "NodeJS", state: "used", isAvailable: true },
        { id: 3, title: "NodeJS", state: "old", isAvailable: false },
        { id: 4, title: "NodeJS", state: "new", isAvailable: true },
        { id: 5, title: "NodeJS", state: "old", isAvailable: false },

        { id: 6, title: "ReactJS", state: "new", isAvailable: true },
        { id: 7, title: "ReactJS", state: "used", isAvailable: true },
        { id: 8, title: "ReactJS", state: "old", isAvailable: false },
        { id: 9, title: "ReactJS", state: "new", isAvailable: true },
        { id: 10, title: "ReactJS", state: "old", isAvailable: false },

        { id: 11, title: "Angular", state: "new", isAvailable: true },
        { id: 12, title: "Angular", state: "used", isAvailable: true },
        { id: 13, title: "Angular", state: "old", isAvailable: false },
        { id: 14, title: "Angular", state: "new", isAvailable: true },
        { id: 15, title: "Angular", state: "old", isAvailable: false },
    ]

    getBooks(): TBook[] {
        return BookStore.list;
    }

}

export abstract class SearchBook {
    books: TBook[]

    constructor() {
        this.books = new BookStore().getBooks();
    }

    unavailableState(id: number) {
        const el = this.books.find(el => el.id === id);
        if (el) el.isAvailable = false
    }

    searchForType(title: string, ...states: State[]): TBook | undefined {
        for (const state of states) {
            const book = this.books.find(el => el.title === title && el.state === state && el.isAvailable);
            if (book) {
                this.unavailableState(book.id)
                return book;
            }
        }
    }

    abstract findBook(title: string): TBook | undefined;
}

export class ProfessorSearch extends SearchBook {
    findBook(title: string): TBook | undefined {
        return this.searchForType(title, "new", "used");
    }
}

export class StudentSearch extends SearchBook {
    findBook(title: string): TBook | undefined {
        return this.searchForType(title, "used", "old");
    }
}

export class ResearcherSearch extends SearchBook {
    findBook(title: string): TBook | undefined {
        return this.searchForType(title, "new", "old");
    }
}

export class Strategy {
    findBookByRole(entity: SearchBook, title: string): TBook | undefined {
        return entity.findBook(title);
    }
}