interface Person{
    name: string;
    age: number;
}

function printPersonProperty(person: Person, property: keyof Person){
    console.log(`Printing person property ${property} ${person[property]}`);
}

const person = {
    name: "Ubaid",
    age:16
}

printPersonProperty(person, "name");

type StringMap = {[key: string]: unknown};

function createStringPair(property: keyof StringMap, value: string): StringMap{
    return {[property]: value};
}
