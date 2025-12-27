
/* Boolean */
let isActive: boolean = true;
let hasPermission = false; // here the typescript make this boolean variable

/*Number*/
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; //Binary
let octal: number = 0o744; //Octal
let float: number = 3.14 //Floating Point

/*String */
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

/*BigInt */
const bigNumber: bigint = 90071992547409914n;
const hugeNumber = BigInt(9007199254740991);

/*Symbol */
const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
}

/* Array*/
const scores: number[] = [100, 56, 98];
const flags: boolean[] = [true, false, true, false];

/* Any */
const data = JSON.parse('{"name":"alice", "age":30}');
let anyValue: any;
anyValue = 'ubaid';
anyValue = 1;


/* unknows */
function processValue(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (Array.isArray(value)) {
        console.log(value.length);
    }
}

