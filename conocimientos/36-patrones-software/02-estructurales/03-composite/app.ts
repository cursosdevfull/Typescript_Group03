import { Box, Product } from "./composite";

const tree = new Box(0)

const simple = new Product(40)

const branch1 = new Box(20)
branch1.add(new Product(10))
branch1.add(new Product(10))
branch1.add(new Product(50))

const branch2 = new Box(30)
branch2.add(new Product(20))
branch2.add(new Product(20))
branch2.add(new Product(200))

const branch3 = new Box(40)
branch3.add(new Product(30))
branch3.add(new Product(30))
branch3.add(new Product(300))

branch2.add(branch3)

tree.add(simple)
tree.add(branch1)
tree.add(branch2)

console.log(tree.operation())