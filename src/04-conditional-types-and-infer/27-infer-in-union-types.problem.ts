import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

/**
 * Todo: implement GetParserResult
 * reference: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 */
type GetParserResult<T> = unknown;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
