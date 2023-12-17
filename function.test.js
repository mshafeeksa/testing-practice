import * as script from "./script";

test("Capitalize first letter of string", () => {
    expect(script.capitalize("locomoTive")).toBe("LocomoTive");
});

test("Reversed string", () => {
    expect(script.reverseString("locomo Tive")).toBe("eviT omocol");
});
test("Calculator", () => {
    expect(script.calculator.add(1, 5)).toBe(6);
    expect(script.calculator.subtract(1, 5)).toBe(-4);
    expect(script.calculator.multiply(1, 5)).toBe(5);
    expect(script.calculator.divide(1, 5)).toBeCloseTo(0.2);
});
test("Caesar cipher", () => {
    expect(script.caesarCipher("AbcdEfgg",4)).toMatch("EfghIjkk");
    expect(script.caesarCipher("9as",6)).toMatch("Bgy");
});
test("analyzeArray", () => {
    expect(script.analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

