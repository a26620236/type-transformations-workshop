import { Equal, Expect } from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

// TODO: implement ObjectOfKeys
// reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
type ObjectOfKeys = unknown;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
];
