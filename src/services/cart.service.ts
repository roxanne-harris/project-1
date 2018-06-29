import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService {

    private selectedProducts: Array<Product>;
    private totalAmount: number;

    constructor() {
        this.selectedProducts = [];
        this.totalAmount = 0;
    }

    getAllProducts() {
        return this.selectedProducts;
    }

    addProduct (product: Product) {
        this.selectedProducts.push(product);
        this.totalAmount+=product.price;
    }

    getTotalAmount() {
        return this.totalAmount;
    }

}