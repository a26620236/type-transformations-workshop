import { Equal, Expect } from "../helpers/type-utils";

// mutable object vs immutable object(read only)
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

/**
 * Todo: implement IndividualProgram
 * reference: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 * reference: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
 * reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
 */
export type IndividualProgram = unknown;

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
