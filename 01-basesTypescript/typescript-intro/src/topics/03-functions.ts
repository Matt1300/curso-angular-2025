function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number) => {
    return `${a + b}`;
}

function multiply(firstNumber: number, base: number, secondNumber?: number) {
    return firstNumber * base;
}

// const result: number = addNumbers(5, 10);
// const result2: string = addNumbersArrow(5, 10);
// const multiplyResult: number = multiply(5, 10);

// console.log({ result, result2, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(strider, 20);
strider.showHp();