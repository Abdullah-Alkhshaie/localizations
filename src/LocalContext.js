import { createContext } from "react";

const defaultValue = {
  locale: "en",
  setLoacle: () => {},
};

export default createContext(defaultValue);
