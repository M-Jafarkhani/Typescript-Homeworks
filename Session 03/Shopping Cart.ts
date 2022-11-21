class Product {
    Id: number;
    CategoryId: number;
    Price: number;

    constructor(id: number, categoryId: number, price: number) {
        this.Id = id;
        this.CategoryId = categoryId;
        this.Price = price;
    }
}

class BasketItem {
    Item: Product;
    Count: number;

    constructor(item: Product, count: number) {
        this.Item = item;
        this.Count = count;
    }
}

let product_1 = new Product(1, 1, 100);
let product_2 = new Product(2, 1, 120);
let product_3 = new Product(3, 2, 75);
let product_4 = new Product(4, 2, 65);
let product_5 = new Product(5, 3, 325);
let product_6 = new Product(6, 3, 225);
let product_7 = new Product(7, 4, 1250);

let basketItem_1 = new BasketItem(product_1, 2);
let basketItem_2 = new BasketItem(product_2, 4);
let basketItem_3 = new BasketItem(product_3, 1);
let basketItem_4 = new BasketItem(product_4, 1);
let basketItem_5 = new BasketItem(product_5, 3);
let basketItem_6 = new BasketItem(product_6, 1);
let basketItem_7 = new BasketItem(product_7, 5);

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);

function orderAmount(basketItems: BasketItem[]): number {
    return basketItems.reduce<number>((amount: number, item: BasketItem) => {
        return amount + (item.Item.Price * item.Count);
    }, 0)
}

function totalOrderAmountByCategory(basketItems: BasketItem[], categoryId: number): number {
    let items = groupBy(basketItems, item => item.Item.CategoryId);
    if (items[categoryId])
        return orderAmount(items[categoryId]);
    return 0;
}

const myShoppingCart: BasketItem[] = [basketItem_1, basketItem_2, basketItem_3, basketItem_4, basketItem_5, basketItem_6, basketItem_7];
const categoryId = 3;

console.log(`Total order amount by categoryId = ${categoryId} equals $${totalOrderAmountByCategory(myShoppingCart, categoryId)}`);