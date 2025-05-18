// export class Person {
//     public name: string;
//     private address: string;
//     constructor(name: string, address: string) {
//         this.name = name;
//         this.address = address;
//     }
// }

// Es lo mismo que lo de arriba, pero más corto
export class Person {
    constructor(
        public name: string,
        private address: string = 'unknown'
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New York');
//     }
// }

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) { }
}

const tony = new Person('Tony Stark', 'New York');
const ironMan = new Hero("Ironman", 45, "Tony Stark", tony);
console.log('ironMan', ironMan);
