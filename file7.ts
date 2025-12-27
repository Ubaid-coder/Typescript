class Person {
    "name": string;
}

const person = new Person();
person.name = "ubaid";

class User {
    private name: string;

    public constructor(name: string){
        this.name = name;
    };

    public getName(): string{
        return this.name;
    }
    
}

// const person = new Person("Jane");
// person.getName();