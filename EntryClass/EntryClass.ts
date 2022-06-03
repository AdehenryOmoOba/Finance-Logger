import HasFormatter from "../Interfaces/HasFormatter.js";

class Entry implements HasFormatter {
    constructor(public name:string, public details:string,public amount:number){}
    format(): string {
        return `${this.name} owes ${this.amount} for ${this.details}`
    }

}

export default Entry