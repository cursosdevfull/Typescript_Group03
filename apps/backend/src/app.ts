import { Request, Response } from "express";
import express from "express";
import { ProductApplication } from "./application/product.application";
import cors from "cors"
import { ProductRepository } from "./domain/product.repository";
import { ProductInfrastructure } from "./infrastructure/product.infrastructure";
import { Product } from "./domain/product";


class App {
    readonly app: express.Application

    constructor(application: ProductApplication) {
        console.log("App constructor")
        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        this.app.get("/product", async (req: Request, res: Response) => {
            const result = await application.list()
            res.json(result)
        })

        this.app.post("/product", async (req: Request, res: Response) => {
            console.log("body", req.body)
            const { name, price } = req.body
            const product = new Product(new Date().getTime(), name, price)
            await application.create(product)
            res.send("Product created")
        })
    }

}

const repository: ProductRepository = new ProductInfrastructure()
const application = new ProductApplication(repository)
export const app = new App(application).app