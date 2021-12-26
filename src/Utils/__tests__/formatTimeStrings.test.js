import { formatTimeStrings } from "../formatTimeStrings";

describe("test formatTimeStrings", () => {
  it("if strings more then 1", () => {
    const string = ["12.00", "14.00"];

    const expected = "12.00 - 14.00";
    const received = formatTimeStrings(string);

    expect(received).toEqual(expected);
  });
  it("if strings empty array", () => {
    const string = [];

    const expected = "";
    const received = formatTimeStrings(string);

    expect(received).toEqual(expected);
  });
  it("if strings undefined", () => {
    const received = formatTimeStrings();

    expect(received).toBeNull();
  });
});
