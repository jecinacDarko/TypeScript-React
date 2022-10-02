import { Result } from "./Result";

export class Response {
    results: Result[] = [];

    constructor(results: Result[]) {
        this.results = results;
    }
}