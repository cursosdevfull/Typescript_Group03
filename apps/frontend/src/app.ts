export class Product {
    constructor(public name: string, public price: number) { }
}

export abstract class Observer {
    abstract notify(): void
}

export class Subject {
    private observers: Observer[] = []

    addObserver(observer: Observer) {
        this.observers.push(observer)
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.notify())
    }
}

abstract class Component<T extends HTMLDivElement, U extends HTMLElement> extends Observer {
    templateElement: HTMLTemplateElement
    hostElement: T
    element: U

    constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
        super()
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement
        this.hostElement = document.getElementById(hostElementId)! as T

        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as U

        if (newElementId) {
            this.element.id = newElementId
        }

        this.attach(insertAtStart)
    }

    private attach(insertAtStart: boolean) {
        this.hostElement.insertAdjacentElement(insertAtStart ? 'afterbegin' : 'beforeend', this.element)
    }
}

class ProductInput extends Component<HTMLDivElement, HTMLElement> {
    name: HTMLInputElement
    price: HTMLInputElement

    constructor(private readonly subject: Subject) {
        super("product-input", "app", true, "user-input")
        this.name = this.element.querySelector("#name") as HTMLInputElement
        this.price = this.element.querySelector("#price") as HTMLInputElement
        this.element.addEventListener("submit", this.submitHandler.bind(this))
    }

    private async submitHandler(event: Event) {
        event.preventDefault()
        const inputs = this.getInputs()
        this.clearInputs()

        await this.saveProduct(inputs)
        this.subject.notifyObservers()
    }

    saveProduct(product: Product) {
        console.log("product", product)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        }

        return fetch("http://localhost:3000/product", options)
    }

    private getInputs() {
        return new Product(this.name.value, +this.price.value)
    }

    private clearInputs() {
        this.name.value = ""
        this.price.value = ""
    }

    notify(): void {
        console.log("ProductInput notified")
    }
}

class ProductList extends Component<HTMLDivElement, HTMLElement> {
    ul: HTMLUListElement

    constructor() {
        super("product-list", "app", false, "product-list")
        this.ul = this.element.querySelector("ul") as HTMLUListElement
        this.fetchProducts()
    }

    async fetchProducts() {
        const products = await this.getProducts()
        this.renderProducts(products)
    }

    getProducts() {
        return fetch("http://localhost:3000/product")
            .then(response => response.json())
    }

    renderProducts(products: Product[]) {
        this.ul.innerHTML = ""
        products.forEach((product: Product) => {
            const li = document.createElement("li")
            li.textContent = `${product.name}: $${product.price}`
            this.ul.appendChild(li)
        })
    }

    notify(): void {
        console.log("ProductList notified")
        this.fetchProducts()
    }
}

const subject = new Subject()

new ProductInput(subject)
subject.addObserver(new ProductList())