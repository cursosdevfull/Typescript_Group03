import { ProductDiscount, ProductNormal, PromotionMerryChristmas, Tax } from "./visitor";

//const tax = new Tax();
const discountPromotion = new PromotionMerryChristmas()
const productNormal = new ProductNormal(1000)
const productDiscount = new ProductDiscount(1000)

const normalPrice = productNormal.accept(discountPromotion);
const discountPrice = productDiscount.accept(discountPromotion);

console.log("normal price", normalPrice);
console.log("discount price", discountPrice);
