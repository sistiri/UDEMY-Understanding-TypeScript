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

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

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


function useVehicle(vehicle:Vehicle) {
    vehicle.drive()
    if(vehicle instanceof Truck) {

        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)