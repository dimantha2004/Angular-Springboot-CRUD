export class Customer {
    id: number;
    name: string;
    address: string;
    salary: number;

    constructor(id: number, name: string, address: string, salary: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
}
