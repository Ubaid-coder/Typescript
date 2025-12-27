/* Aliases */
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

type Animal = { name: string };
type Bear = Animal & { honey: boolean };

const bear: Bear = { name: 'Winnie', honey: true };

type Status = "success" | "error";
let response: Status = "success";

/* Interfaces */

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
}

