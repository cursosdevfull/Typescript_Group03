export class State<T> {
    constructor(private readonly payload: T) { }

    getState(): T {
        return this.payload;
    }
}

export class Store<T> {
    private states: State<T>[] = [];

    addState(state: State<T>) {
        this.states.push(state);
    }

    getState(index: number): State<T> {
        return this.states[index];
    }

    getAllStates(): State<T>[] {
        return this.states;
    }
}

export class App<T> {
    private payload!: T;

    setState(payload: T) {
        this.payload = payload;
    }

    restoreState(state: State<T>) {
        this.payload = state.getState();
    }

    createState(): State<T> {
        return new State(this.payload);
    }

    showState(): T {
        return this.payload;
    }
}
