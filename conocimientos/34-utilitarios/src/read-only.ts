type ProductGallery = {
    id: number,
    name: string,
    price: number
    stock: number
}

const product: Readonly<ProductGallery> = {
    id: 1,
    name: "Laptop",
    price: 1500,
    stock: 10
}

//product.id = 2