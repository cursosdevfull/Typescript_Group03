import * as XML from "xml2js";

export type TData = {
    title: string;
    quantity: number;
    total: number;
}

export type ISummary = {
    origin: string
    summary: TData[]
}

export abstract class Data {
    async getSummary(): Promise<ISummary> {
        return {
            origin: this.getOrigin(),
            summary: await this.getSummaryData()
        }
    }

    protected abstract getOrigin(): string;
    protected abstract getSummaryData(): Promise<TData[]>;
}

export class SucursalLima extends Data {
    constructor(private readonly data: any) {
        super();
    }

    protected getOrigin(): string {
        return "SUCURSAL LIMA";
    }

    protected async getSummaryData(): Promise<TData[]> {
        return this.data.reduce((acc: Record<string, any>, item: any) => {
            if (acc[item.title]) {
                acc[item.title].quantity++;
                acc[item.title].total += item.price;
            } else {
                acc[item.title] = {}
                acc[item.title].quantity = 1;
                acc[item.title].total = item.price;
            }
            return acc
        }, {})
    }

}

export class SucursalArequipa extends Data {
    constructor(private readonly data: any) {
        super();
    }

    protected getOrigin(): string {
        return "SUCURSAL AREQUIPA";
    }

    protected async getSummaryData(): Promise<TData[]> {
        return new Promise((resolve, reject) => {
            XML.parseString(this.data, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    const data = result.sales.book
                    const elements = data.map((item: any) => {
                        return {
                            title: item.title[0],
                            price: item.price[0]
                        }
                    })

                    const summary = elements.reduce((acc: Record<string, any>, item: any) => {
                        if (acc[item.title]) {
                            acc[item.title].quantity++;;
                            acc[item.title].total += +item.price;
                        } else {
                            acc[item.title] = {}
                            acc[item.title].quantity = 1;
                            acc[item.title].total = +item.price;
                        }
                        return acc
                    }, {})

                    resolve(summary)
                }
            })
        })
    }
}