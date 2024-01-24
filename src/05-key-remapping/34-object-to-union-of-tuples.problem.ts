import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

// This is an example of producing new types by combining key and value.
// extract values as union from a Record
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
};

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
