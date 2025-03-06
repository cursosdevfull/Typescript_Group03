import { Product } from "./product";

export type ProductRepository = {
    getAll(): Promise<Product[]>;
    create(product: Product): Promise<void>;
}