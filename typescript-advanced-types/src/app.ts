// INTERSECTION TYPES

type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmnployee = Admin & Employee;

const e1: ElevatedEmnployee = {
  name: "Max",
  priviliges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// TYPE GUARDS

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

type UnknownEmployee = Employee | Admin;
function printEmoloyeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("priviliges" in emp) {
    console.log("Priviliges: " + emp.priviliges);
  }
  if ("startDate" in emp) {
    console.log("Start Date:  " + emp.startDate);
  }
}

printEmoloyeeInformation(e1);
printEmoloyeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNIONS

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// TYPE CASTING

// const paragraph = document.querySelector('p')            //HTMLParagraphElement
const paragraph = document.getElementById("message-output"); //HTMLElement

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!; // GOOD if NOT REACT
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement; // GOOD with REACT & JSX
userInputElement.value = "Hi there!";

// Alternative solution for exlamation mark (make sure it's not NULL):
const userInputElement2 = document.getElementById("user-input2"); // GOOD with REACT
if (userInputElement2) {
  (userInputElement2 as HTMLInputElement).value = "Hi there!";
}

// INDEX PROPERTY TYPES

interface ErrorContainer {
  //{email: 'Not a valid email!',
  // username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capitol character!",
};

// FUNCTION

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add(1, 5); // without overload: infered type: string | number
const result2 = add("Max", " Schwarz"); //without overload: infered type: string | number

result2.split(" "); // Without overload: string methods can't be uses on string |number type
// result1.split(" "); ERROR - its a number type
