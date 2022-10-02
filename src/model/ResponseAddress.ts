class Street {
    number: string; 
    name: string;

    constructor(number: string, name: string) {
        this.number = number;
        this.name = name;
    }
}

export class ResponseAddress {
    city: string;
    street: Street; 
    postcode: string;

    constructor(city: string, street: Street, postcode: string) {
        this.city = city;
        this.street = street;
        this.postcode = postcode;
    }
}