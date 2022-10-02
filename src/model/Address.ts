export class Address {
    city: string;
    streetName: string;
    streetNumber: string; 
    postcode: string;

    constructor(city: string, streetName: string, streetNumber: string, postcode: string) {
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.postcode = postcode;
    }
}