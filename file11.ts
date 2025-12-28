type Color = 'red' | 'green' | 'blue';
type HexColor<T extends Color> = `#${string}`;

let myColor: HexColor<"red"> = "#0000FF";

type DynamicObject = { [key: `dynamic_${string}`]: string };

let obj: DynamicObject = { dynamic_key: "value" };