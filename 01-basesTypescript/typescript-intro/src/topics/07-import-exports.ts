import { Product, TaxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 100.0
    },
    {
        description: 'iPad Air',
        price: 200.0
    }
]

const [total, totalWithTax] = TaxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log(`Total, ${total}`);
console.log(`Tax, ${totalWithTax}`);