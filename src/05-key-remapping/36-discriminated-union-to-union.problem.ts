import { Equal, Expect } from "../helpers/type-utils";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

// 1. key remapping via `as`
// 2. produce new value type by leveraging template literal types
// 3. extract values as union from a Record
type TransformedFruit = unknown;

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
