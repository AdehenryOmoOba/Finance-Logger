const form = document.querySelector("#form")! as HTMLFormElement
const type = document.querySelector("#type")! as HTMLSelectElement
const toFrom = document.querySelector("#to-from")! as HTMLInputElement
const details = document.querySelector("#details")! as HTMLInputElement
const amount = document.querySelector("#amount")! as HTMLInputElement
const button = document.querySelector("#submit")! as HTMLButtonElement
const container = document.querySelector("#container")! as HTMLUListElement

interface HasFormatter {
    format  () : string
}

class Entry implements HasFormatter {
    constructor(public name:string, public details:string,public amount:number,public type:string){}
    format(): string {
        if(this.type === "invoice") {
            return `${this.name} owes $${this.amount} for ${this.details}`
        }else{
            return `${this.name} is owed $${this.amount} for ${this.details}`
        }
    }

}

button.addEventListener("click", (e:Event) => {
    e.preventDefault()

    const transactionDetails:Entry = new Entry(toFrom.value, details.value,amount.valueAsNumber,type.value)


    const li = document.createElement("li")
    const h4 = document.createElement("h4")
    h4.textContent = type.value
    li.appendChild(h4)
    li.append(transactionDetails.format())
    container.append(li)
    form.reset()
})