import { Product } from "../domain/product";
import { ProductRepository } from "../domain/product.repository";

export class ProductApplication {
    constructor(private readonly repository: ProductRepository) { }

    async list() {
        return this.repository.getAll();
    }

    async create(product: Product) {
        this.repository.create(product);
    }
}