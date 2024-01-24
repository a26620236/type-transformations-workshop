import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// reference: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
