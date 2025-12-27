/* Optional Parameter */
function greet(name?: string): string {
    return `hello, ${name || 'stranger'}`;
}

const message: string = greet();


/* Arrays */
const usersarray: string[] = [];
usersarray.push('Ubaid');

/* Read Only Arrays */
const users: readonly string[] = ['Ashar'];

/* Tuples */
let ourTuple: [number, boolean, string];
// ourTuple = [1,2,3]
ourTuple = [6, true, 'Ubaidts here'];

/* Readonly Tuples */
const readonlyTuple: readonly [number, boolean, string] = [1, true, 'ubaid']

/* Named Tuples*/
const graph: [x: number, y: number] = [55, 44];
const [x, y] = graph;

/*Objects */
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

car.type = "Ford";
// car.type=3

const optionalCar: { type: string, mileage?: number } = {
    type: "Toyota"
}

optionalCar.mileage = 2000;

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

/* Enums */
enum StatusCode {
    Notfound = 404,
    Success = 200,
    Accepted = 202,
    BadReqequest = 400
};

console.log(StatusCode.Notfound); //404
console.log(StatusCode.Success); //200

enum CardinalDirections {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West'
};

