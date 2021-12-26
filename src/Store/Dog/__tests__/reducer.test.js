import { getDogRequestAction } from "../actions";
import { dogReducer } from "../reducer";

describe("test dog reducer", () => {
  it("test getDogRequestAction", () => {
    const received = dogReducer(undefined, getDogRequestAction());

    expect(received).toMatchSnapshot();
  });
});
