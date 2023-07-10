import { Equal, Expect } from "../../../utility-types/testing";
import { ButtonAppearance } from "./ButtonAppearance.type";
import { ButtonVariant } from "./ButtonType.type";

type Intent = "none" | "success" | "destructive";

export type ButtonIntent<
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>
> = TVariant extends "Default"
  ? TAppearance extends "primary"
    ? Intent
    : TAppearance extends "secondary"
    ? Intent
    : TAppearance extends "inverted"
    ? "none"
    : never
  : TVariant extends "Ghost"
  ? TAppearance extends "primary"
    ? Intent
    : TAppearance extends "secondary"
    ? "none"
    : TAppearance extends "inverted"
    ? "none"
    : TAppearance extends "reverseInverted"
    ? "none"
    : never
  : TVariant extends "Bare"
  ? TAppearance extends "primary"
    ? Intent
    : TAppearance extends "secondary"
    ? "none"
    : TAppearance extends "inverted"
    ? "none"
    : TAppearance extends "reverseInverted"
    ? "none"
    : never
  : never;

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  // Default
  Expect<
    Equal<
      ButtonIntent<"Default", "primary">,
      "none" | "success" | "destructive"
    >
  >,
  Expect<
    Equal<
      ButtonIntent<"Default", "secondary">,
      "none" | "success" | "destructive"
    >
  >,
  Expect<Equal<ButtonIntent<"Default", "inverted">, "none">>,
  // @ts-expect-error - wrong appearance
  ButtonIntent<"Default", "reverseInverted">,

  // Ghost
  Expect<
    Equal<ButtonIntent<"Ghost", "primary">, "none" | "success" | "destructive">
  >,
  Expect<Equal<ButtonIntent<"Ghost", "secondary">, "none">>,
  Expect<Equal<ButtonIntent<"Ghost", "inverted">, "none">>,
  Expect<Equal<ButtonIntent<"Ghost", "reverseInverted">, "none">>,
  // @ts-expect-error - wrong appearance
  ButtonIntent<"Ghost", "Foo">,

  // Bare
  Expect<
    Equal<ButtonIntent<"Bare", "primary">, "none" | "success" | "destructive">
  >,
  Expect<Equal<ButtonIntent<"Bare", "secondary">, "none">>,
  Expect<Equal<ButtonIntent<"Bare", "inverted">, "none">>,
  Expect<Equal<ButtonIntent<"Bare", "reverseInverted">, "none">>,
  // @ts-expect-error - wrong appearance
  ButtonIntent<"Bare", "Foo">,

  // @ts-expect-error - wrong variant
  ButtonIntent<"Foo", "primary">
];
