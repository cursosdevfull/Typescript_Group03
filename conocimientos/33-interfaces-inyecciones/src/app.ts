interface Routes {
  [key: string]: new (...args: any[]) => any
}

interface Product {
  category: string,
  title: string
}

interface Inyection {
  getTitle(): string
}

class ProductService {
  private products: Product[] = [
    { category: "electronic", title: "Laptop" },
    { category: "electronic", title: "Smartphone" },
    { category: "funiture", title: "Silla" },
    { category: "furniture", title: "Mesa" }
  ]

  getAll() {
    return  [...this.products]
  }

  add(product: Product) {
    this.products.push(product)
  }
}


class HomeComponent implements Inyection {
  products: Product[]
  productType: string

  constructor(productService: ProductService) {
    this.products = productService.getAll()
    this.productType = "all"
  }

  getTitle(): string {
    return HomeComponent.name
  }
}

class ElectronicComponent implements Inyection {
  products: Product[]
  productType: string

  constructor(productService: ProductService) {
    this.products = productService.getAll().filter(product => product.category === "electronic")
    this.productType = "all"
  }
  
  getTitle(): string {
    return ElectronicComponent.name
  }
}

class FurnitureComponent implements Inyection {
  products: Product[]
  productType: string

  constructor(productService: ProductService) {
    this.products = productService.getAll().filter(product => product.category === "furniture")
    this.productType = "all"
  }

  getTitle(): string {
    return FurnitureComponent.name
  }
}

const routes: Routes = {
  "/": HomeComponent,
  "/electronic": ElectronicComponent,
  "/furniture": FurnitureComponent
}

function renderProduct(route: string) {
  const component = new routes[route](new ProductService())
  console.log(component.getTitle())
}

renderProduct("/furniture")