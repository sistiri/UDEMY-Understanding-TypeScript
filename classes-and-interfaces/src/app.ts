class Department {
  // private readonly id: string;
  // private name: string;
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    //   validation etc
    // this.id = d2;    // NOT WORKING because READONLY property
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
      if(this.lastReport) {
          return this.lastReport;
      }
      throw new Error('No report found')
  }

  set mostRecentReport(value: string) {
      if(!value) {
          throw new Error('Please pass in a valid value')
      }
      this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

// const it = new Department("d1", "it");
const it = new ITDepartment("d1", ["Max"]);
console.log(it);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna"  // NOT WORKING because PRIVATE property

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

// const itCopy = { name: "MUST HAVE", describe: it.describe };
// itCopy.describe();

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = 'Your End Report'


accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport)
accounting.addEmployee("Max");
accounting.addEmployee("Maxim");
accounting.printReports();
console.log(accounting);
