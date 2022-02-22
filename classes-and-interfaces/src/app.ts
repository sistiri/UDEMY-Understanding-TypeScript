abstract class Department {
  static fiscalYear = 2022;
  // private readonly id: string;
  // private name: string;
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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
  describe(){
      console.log('IT Department - ID: ' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
if (AccountingDepartment.instance) {
    return this.instance
}
this.instance = new AccountingDepartment('d2', []);
return this.instance
  }
   
  describe() {
      console.log('Accounting Department - ID: ' + this.id)
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

const employee1 = Department.createEmployee("Maximilan");
console.log(employee1, Department.fiscalYear);

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

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
console.log(accounting, accounting2)

accounting.mostRecentReport = "Your End Report";

accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Maxim");
// accounting.printReports();
accounting.describe()
console.log(accounting);
