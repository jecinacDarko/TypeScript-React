import { Name } from "./Name";
import { ResponseAddress } from "./ResponseAddress";

class Dob {
    age: number;

    constructor(age: number) {
        this.age = age;
    }
}

export class Result {
    dob: Dob;
    location: ResponseAddress;
    name: Name;

    constructor(dob: Dob, location: ResponseAddress, name: Name) {
        this.dob = dob;
        this.location = location;
        this.name = name;
    }
}