import axios from "axios";
import {isNil} from "lib/value/value";

const newClient = (config) => {
  if (isNil(config)) {
    throw new Error("need config");
  }

  if (isNil(config.baseURL)) {
    throw new Error("need config.baseURL");
  }

  return axios.create({
    baseURL: config.baseURL,
  });
};

export {
  newClient,
};
