export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Tony Stark'
}

const passenger2: Passenger = {
    name: 'Steve Rogers',
    children: ['Peter', 'Parker']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(`Children: ${howManyChildren}`);
}

printChildren(passenger1);
