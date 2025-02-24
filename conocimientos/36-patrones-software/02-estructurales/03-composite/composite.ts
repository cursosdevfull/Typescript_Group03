export type TProduct = {
    price: number;
}

export abstract class Component {
    protected _parent: Component | undefined

    set parent(parent: Component | undefined) {
        this._parent = parent
    }

    get parent(): Component | undefined {
        return this._parent
    }

    add(component: Component): void { }

    remove(component: Component): void { }

    isComposite(): boolean {
        return false
    }

    abstract operation(): number
}

export class Product extends Component {
    constructor(private readonly price: number) {
        super()
    }


    operation(): number {
        return this.price
    }
}

export class Box extends Component {
    protected children: Component[] = []

    constructor(private readonly price: number) {
        super()
    }

    add(component: Component): void {
        this.children.push(component)
        component.parent = this
    }

    remove(component: Component): void {
        const index = this.children.indexOf(component)
        this.children.splice(index, 1)

        component.parent = undefined
    }

    isComposite(): boolean {
        return true
    }

    operation(): number {
        return this.children.reduce((accum, current) => {
            return accum + current.operation()
        }, this.price)
    }
}