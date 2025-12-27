let value: string | null | undefined = null;

value = 'ubaid';
value = undefined;

interface House {
    sqft: number;
    yard?: {
        sqft: number
    };
};

function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize == undefined) {
        console.log('No Yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

let home: House = {
    sqft: 500
};

printYardSize(home); // Prints No Yard

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`)
}

printMileage(null); // Prints: 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

function getValue(): string | undefined {
    return 'hello';
}

let values = getValue();
console.log('value legnth:' + values!.length);

let array: number[] = [1, 2, 3];
let item = array[0];