import { Address } from "./Address";
import { Name } from "./Name";

export class User {
    age: number;
    address: Address;
    name: Name;
    
    constructor (age: number, address: Address, name: Name) {
        this.age = age;
        this.address = address;
        this.name = name;

    } 

}