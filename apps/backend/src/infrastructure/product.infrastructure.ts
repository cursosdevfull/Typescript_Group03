import { Product } from "../domain/product";
import { ProductRepository } from "../domain/product.repository";

const products: Product[] = [
    new Product(1, "Product 1", 100),
    new Product(2, "Product 2", 200),
    new Product(3, "Product 3", 300),
    new Product(4, "Product 4", 300),
]

export class ProductInfrastructure implements ProductRepository {
    async getAll(): Promise<Product[]> {
        return products
    }
    async create(product: Product): Promise<void> {
        products.push(product)
    }
}