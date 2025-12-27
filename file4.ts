/* Interface Merging */

interface Animal { name: string };
interface Animal { age: number };

const dog: Animal = { name: "Fido", age: 5 };

interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 30,
    width: 20,
    color: 'blue'
}

/* Union */

function printStatusCode(code: number | string){
    console.log(`My status code is ${code}`);
}

printStatusCode(404);
printStatusCode('404');