import { ButtonProps } from "./Button.props";
import { tet } from "../../tetrisly/tetrisly";
import { ButtonVariant } from "./types/ButtonType.type";
import { ButtonAppearance } from "./types/ButtonAppearance.type";
import { stylesBuilder } from "./stylesBuilder/stylesBuilder";

export const Button = <
  TVariant extends ButtonVariant = "Default",
  TAppearance extends ButtonAppearance<TVariant> = ButtonAppearance<TVariant>
>({
  label,
  variant,
  appearance,
  intent,
  state,
  size,
  ...rest
}: ButtonProps<TVariant, TAppearance>) => {
  return (
    <tet.button
      {...stylesBuilder({ variant, appearance, intent, size })}
      disabled={state === "disabled"}
      data-state={state}
      style={{ textUnderlineOffset: "3px", textDecorationThickness: "1px" }}
      {...rest}
    >
      {label}
    </tet.button>
  );
};
