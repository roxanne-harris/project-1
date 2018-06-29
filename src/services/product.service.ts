import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    private products: Array<Product>;

    constructor() {
        this.products = [];
    }

    getAllProducts() {

        this.products = [];

        var product1 = new Product();
        product1.name = "Nike Air Force 1 '07";
        product1.description = "The legend lives on in the Nike Air Force 1 '07 Women's Shoe, a modern take on the icon that blends classic style and fresh, crisp details.";
        product1.price = 1399.95;
        product1.id = 1;
        product1.stockedQty = 100;
        product1.imageUrl = "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/itackwubgsod6qzeb02m/air-force-1-07-shoe-yATkW1Bp.jpg";

        var product2 = new Product();
        product2.name = "Nike Air VaporMax Plus";
        product2.description = "With a re-invented cushioning system, the Nike Air VaporMax Plus Men's Shoe delivers a lightweight, bouncy ride for a gravity-defying sensation underfoot, while the throwback moulded upper gives you a snug, comfortable fit.";
        product2.price = 3399.95;
        product2.id = 2;
        product2.stockedQty = 100;
        product2.imageUrl = "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/u3cvo9xc9rddcr3jwbmv/air-vapormax-plus-shoe-yATY9p7E.jpg";

        

        this.products.push(product1);
        this.products.push(product2);
        
        return this.products;
    }
}