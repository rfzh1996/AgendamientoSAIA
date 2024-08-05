// import simpleRestProvider from "ra-data-simple-rest";
import fakeRestDataProvider from "ra-data-fakerest";
import data from "./data.json";

export const dataProvider = fakeRestDataProvider(
  data,process.env.NODE_ENV !== "test"
);

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );