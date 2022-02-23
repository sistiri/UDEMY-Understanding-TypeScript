type Admin = {
    name: string;
    priviliges: string[];
};

type Employee = {
    name: string;
    startDate: Date
}

type ElevatedEmnployee = Admin & Employee;

const e1: ElevatedEmnployee ={
    name: 'Max',
    priviliges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric