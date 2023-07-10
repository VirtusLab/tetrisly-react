import { ButtonAppearance } from "../types/ButtonAppearance.type";
import { ButtonVariant } from "../types/ButtonType.type";
import { StylesBuilderProps } from "./stylesBuilder.props";
import { applyDefaults } from "./applyDefaults";
import { config } from "../Button.config";
import { SystemProps } from "@xstyled/styled-components";
import { Theme } from "../../../theme";

export function stylesBuilder<
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>
>(props: StylesBuilderProps<TVariant, TAppearance>): SystemProps<Theme> {
  const options = applyDefaults(props);
  const { appearance, size, ...rest } = config[options.variant];

  if (!isKeyOf(appearance, options.appearance))
    throw new Error(
      `${options.appearance} is not a valid appearance for ${options.variant}`
    );
  const { intent: intentConfig, ...appearanceProps } =
    appearance[options.appearance];

  if (!isKeyOf(intentConfig, options.intent)) {
    throw new Error(
      `${options.intent} is not a valid intent for ${options.variant} ${options.appearance}`
    );
  }

  const intentProps = intentConfig[options.intent];

  const sizes = isKeyOf(size, options.size) ? size[options.size] : {};

  return {
    ...rest,
    ...appearanceProps,
    ...intentProps,
    ...sizes,
  } as const;
}

function isKeyOf<T extends object>(
  obj: T,
  key: string
): key is Exclude<keyof T, number | symbol> {
  return key in obj;
}
