'use strict'

class Product {
    constructor (description, price, stock){
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    showInfo (){
        alert(`Description ${this.description} Price ${this.price} stock ${this.stock}`)
    }
    minusStock () {
        this.stock =this.stock-2;
        alert(`stock ${this.stock}`)
    }
    incrementStock (){
        this.stock =this.stock+2;
        alert(`stock ${this.stock}`)
    }

    updatePrice (newPrice){
        this.price = newPrice;

    }

}
let product = new Product ( "celular", 200,20);
product.showInfo();
product.minusStock();
product.incrementStock();
product.updatePrice(300);
product.showInfo()