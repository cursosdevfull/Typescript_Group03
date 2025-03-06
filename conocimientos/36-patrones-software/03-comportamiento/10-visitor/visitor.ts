enum OfferType {
    ProductNormal,
    ProductDiscount,
}

export type Visitor = {
    visit(entity: unknown): number
}

export type Visitable = {
    accept(visitor: Visitor): number
}

export class ProductNormal implements Visitable {
    private type: OfferType = OfferType.ProductNormal;

    constructor(public readonly price: number) { }

    accept(visitor: Visitor): number {
        return visitor.visit(this)
    }
}

export class ProductDiscount {
    private type: OfferType = OfferType.ProductDiscount;

    constructor(public readonly price: number) { }

    accept(visitor: Visitor): number {
        return visitor.visit(this)
    }
}

export class Tax implements Visitor {
    private readonly taxNormal = 1.18;
    private readonly taxDiscount = 1;

    visit(entity: unknown): number {
        if (entity instanceof ProductNormal) {
            return Math.round(entity.price * this.taxNormal);
        } else if (entity instanceof ProductDiscount) {
            return Math.round(entity.price * this.taxDiscount);
        }
        throw new Error("Unknown entity");
    }
}

export class PromotionMerryChristmas implements Visitor {
    private readonly discount = 0.8;

    visit(entity: unknown): number {
        if (entity instanceof ProductNormal) {
            return Math.round(entity.price);
        } else if (entity instanceof ProductDiscount) {
            return Math.round(entity.price * this.discount);
        }
        throw new Error("Unknown entity");
    }
}