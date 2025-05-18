export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 100.0
// }

// const table: Product = {
//     description: 'iPad Air',
//     price: 200.0
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function TaxCalculation(options: TaxCalculationOptions): [number, number] {
    const { products, tax } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

// const shoppingCart: Product[] = [phone, table];
// const tax = 0.15;

// const [total, totalWithTax] = TaxCalculation({
//     products: shoppingCart,
//     tax
// });

// console.log(`Total, ${total}`);
// console.log(`Tax, ${totalWithTax}`);


