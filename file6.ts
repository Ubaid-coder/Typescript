/* casting with as */
let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown = 4;
console.log((y as string).length) // undefined

// console.log((4 as string).length) //err

/* casting with <>*/
let z: unknown = 'hello';
console.log((<string>x).length);

/* Force casting */
let q: unknown = 'hello';

// console.log(((q as unknown) as number).length); //err