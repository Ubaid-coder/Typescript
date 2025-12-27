function createParis<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2]

}

console.log(createParis<string, number>('hello', 12))

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

interface Point {
    x: number,
    y: number
}

let pointPart: Partial<Point> = {}; //`Partial` allows x and y to be optional
pointPart.x = 10;

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

const nameAgeMap: Record<string, number> = {
    'alice':12,
    'bob':22,
}

 interface Person{
    name: string,
    age: number,
    location?: string;
 }

 const bob: Omit<Person, 'age' | 'location'> = {
    name:'Bob'
 }

 const alice: Pick<Person, 'name'> ={
    name:"Alice"
 }

 type Primitive = string | number | boolean;
 const value: Exclude<Primitive, string> = true;

 type PointGenerator = () => {
    x:number,
    y:number;
 }

 const point: ReturnType<PointGenerator> ={
    x: 10,
    y: 20
 }

 type PointPrinter = (p: {x:number, y:number}) => void;
 const point2: Parameters<PointPrinter>[0] = {
    x:20,
    y:40
 }

 interface Person{
    name:string,
    age: number
 }

 const person3: Readonly<Person> = {
    name:"Dylan",
    age:35
 }

 //person3.name = 'Levy' //Cannot assign to 'name' because it is a read-only property