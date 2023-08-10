import modClass from "../mod/modArithmetic";
import chai, { expect } from "chai";

describe("modClass", () => {
  it("should perform mod arithmetic correctly", () => {
    const modInstance = new modClass({ op: "+", num1: 5, num2: 3, mod: 7 });

    expect(modInstance.modCalculator()).to.equal(1); // 5 + 3 = 8, 8 % 7 = 1
  });

  it("should handle negative results correctly", () => {
    const modInstance = new modClass({ op: "-", num1: 2, num2: 5, mod: 7 });

    expect(modInstance.modCalculator()).to.equal(4); // 2 - 5 = -3, (-3 + 7) % 7 = 4
  });
});
