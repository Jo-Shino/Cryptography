/*
  modの演算を行うclassです
*/
interface materialSet {
  op: "+" | "-" | "*";
  num1: number;
  num2: number;
  mod: number;
}

class mod {
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

  modCalculator({ op, num1, num2, mod }: materialSet): number {
    let sum: number;
    let reminder: number;
    switch (op) {
      case "+":
        sum = num1 + num2;
        break;
      case "-":
        sum = num1 - num2;
        break;
      case "*":
        sum = num1 * num2;
        break;
      default:
        throw new Error("Invalid op");
    }
    reminder = sum % mod;
    if (reminder < 0) reminder = reminder + mod;
    return reminder;
  }
}
