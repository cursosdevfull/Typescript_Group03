import { App, Store } from "./memento";

type Item = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

type ShoppingCart = Item[]

const store = new Store<ShoppingCart>();
const app = new App<ShoppingCart>();

const cart: ShoppingCart = [{ id: 1, name: "Item 1", price: 100, quantity: 1 }]

app.setState([...cart]);
store.addState(app.createState());

cart.push({ id: 2, name: "Item 2", price: 200, quantity: 5 });
app.setState([...cart])
store.addState(app.createState());

const itemPosition = cart.findIndex(item => item.id === 2);
const cartClone = Object.assign({}, cart[itemPosition]);
cartClone.quantity = 10;
cart.splice(itemPosition, 1, cartClone);
app.setState([...cart]);
store.addState(app.createState());

cart.push({ id: 3, name: "Item 3", price: 300, quantity: 3 });
cart.push({ id: 4, name: "Item 4", price: 400, quantity: 2 });
cart.push({ id: 5, name: "Item 5", price: 500, quantity: 1 });
app.setState([...cart]);
store.addState(app.createState());

cart.splice(2, 2)
app.setState([...cart]);
store.addState(app.createState());

console.log(JSON.stringify(store.getAllStates(), null, "\t"));



