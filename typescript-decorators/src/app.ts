function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1></h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();
console.log(pers);

// PROPERTY, ACCESSOR, METHOD, PARAMETER DECORATORS

function Log(target: any, propertyName: string | Symbol) {
  console.log("---- Property decorator! ----");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("---- Accessor decorator! ----");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("---- Method decorator! ----");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log("---- Parameter decorator! ----");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithtax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}


// <---------------------------------------------------->
// Returning (and changing) a Class in a Class Decorator
// <----------------------------------------------------->

function WithTemplate2(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends { new (...args: any[]): {name: string} }>(
      originalConstructor: T
    ) {
      return class extends originalConstructor {
        constructor(..._: any[]) {
          super();
          console.log('Rendering template');
          const hookEl = document.getElementById(hookId);
          if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = this.name;
          }
        }
      };
    };
  }

@Logger("LOGGING - PERSON - 2")
@WithTemplate2("<h1></h1>", "app2")
class Person2 {
  name = "Max2";
  constructor() {
    console.log("Creating person object 2");
  }
}

const pers2 = new Person2();
console.log(pers2);