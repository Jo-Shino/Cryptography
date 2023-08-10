/*
  Class that performs mod operations.
*/
interface materialSet {
  op: "+" | "-" | "*";
  num1: number;
  num2: number;
  mod: number;
}

export default class modClass {
  op: "+" | "-" | "*";
  num1: number;
  num2: number;
  mod: number;

  constructor({ op, num1, num2, mod }: materialSet) {
    this.op = op;
    this.num1 = num1;
    this.num2 = num2;
    this.mod = mod;
  }

  modCalculator(): number {
    let sum: number;
    let reminder: number;
    switch (this.op) {
      case "+":
        sum = this.num1 + this.num2;
        break;
      case "-":
        sum = this.num1 - this.num2;
        break;
      case "*":
        sum = this.num1 * this.num2;
        break;
      default:
        throw new Error("Invalid op");
    }
    reminder = sum % this.mod;
    if (reminder < 0) reminder = reminder + this.mod;
    return reminder;
  }
}
