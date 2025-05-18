function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }

}

@classDecorator
class SuperClass {
    public myProperty: string = 'super class property';
    print() {
        console.log('super class print method');
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
