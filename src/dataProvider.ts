// import simpleRestProvider from "ra-data-simple-rest";
import fakeRestDataProvider from 'ra-data-fakerest';
import data from './data.json';

const dataProvider = fakeRestDataProvider(data, true);

export default dataProvider;
// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );