type GreetingProps = {
    name: string;
    age: number;
}

export default function Greeting({ name, age }: GreetingProps) {
    return (
        <div>
            <h2>Hello, {name}</h2>
            {age !== undefined && <p>You are {age} years old.</p>}
        </div>
    )
}
