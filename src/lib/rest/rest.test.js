import axios from "axios";
import * as rest from "./rest";
jest.mock("axios");
axios.create.mockImplementation(() => "boo");

describe("newClient should:", () => {
  afterEach(() => {
    axios.create.mockClear();
  });

  it("be defined", () => {
    expect(rest.newClient).toBeDefined();
  });

  it("throw if no config given", () => {
    expect(() => {
      rest.newClient();
    }).toThrow();
  });

  it("throw if no baseURL given", () => {
    expect(() => {
      rest.newClient({});
    }).toThrow();
  });

  it("call axios.create with the given config.", () => {
    rest.newClient({
      baseURL: "blah",
    });
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: "blah",
    });
  });

  it("return an instance defined.", () => {
    const client = rest.newClient({
      baseURL: "blah",
    });
    expect(client).toBeDefined();
  });
});
