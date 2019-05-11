import axios from "axios";
import {httpClient} from "./http";
jest.mock("axios");
axios.create.mockImplementation(() => "boo");

describe("newClient should:", () => {
  afterEach(() => {
    axios.create.mockClear();
  });

  it("be defined", () => {
    expect(httpClient).toBeDefined();
  });

  it("throw if no config given", () => {
    expect(() => {
      httpClient();
    }).toThrow();
  });

  it("throw if no baseURL given", () => {
    expect(() => {
      httpClient({});
    }).toThrow();
  });

  it("call axios.create with the given config.", () => {
    httpClient({
      baseURL: "blah",
    });
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: "blah",
    });
  });

  it("return an instance defined.", () => {
    const client = httpClient({
      baseURL: "blah",
    });
    expect(client).toBeDefined();
  });
});
