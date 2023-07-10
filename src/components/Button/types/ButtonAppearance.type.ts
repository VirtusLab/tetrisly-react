import { Equal, Expect } from "../../../utility-types/testing";
import { ButtonVariant } from "./ButtonType.type";

type Appearance = "primary" | "secondary" | "inverted" | "reverseInverted";

export type ButtonAppearance<TVariant extends ButtonVariant> =
  TVariant extends "Default"
    ? Exclude<Appearance, "reverseInverted">
    : TVariant extends "Ghost"
    ? Appearance
    : TVariant extends "Bare"
    ? Appearance
    : never;

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<
    Equal<ButtonAppearance<"Default">, "primary" | "secondary" | "inverted">
  >,
  Expect<
    Equal<
      ButtonAppearance<"Ghost">,
      "primary" | "secondary" | "inverted" | "reverseInverted"
    >
  >,
  Expect<
    Equal<
      ButtonAppearance<"Bare">,
      "primary" | "secondary" | "inverted" | "reverseInverted"
    >
  >,
  // @ts-expect-error - wrong variant
  ButtonAppearance<"Foo">
];
