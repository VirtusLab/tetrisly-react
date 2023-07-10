// import { merge, get } from "lodash";

// import {
//   ButtonDefaultProps,
//   ButtonBareProps,
//   ButtonGhostProps,
// } from "./Button.props";
// import {
//   ButtonDefaultVariantsConfig,
//   ButtonGhostVariantsConfig,
//   ButtonBareVariantsConfig,
// } from "./ButtonVariantsConfig.interface";
// import { ComponentConfigProps } from "../../constants/ComponentConfigProps.type";

// export const buttonVariant = (
//   configProps: ComponentConfigProps & {
//     variants:
//       | ButtonDefaultVariantsConfig
//       | ButtonBareVariantsConfig
//       | ButtonGhostVariantsConfig;
//   },
//   vataintProps: Pick<
//     ButtonDefaultProps | ButtonBareProps | ButtonGhostProps,
//     "appearance" | "intent" | "size"
//   >
// ): ComponentConfigProps => {
//   const { appearance, intent, size } = vataintProps;
//   const { variants, ...rest } = configProps;

//   let config = { ...rest };

//   if (!variants || !appearance || !intent) return configProps;

//   try {
//     const { intent: intentConfig, ...appearanceProps } = get(variants, [
//       "appearance",
//       appearance,
//     ]);
//     const intentProps = get(intentConfig, [intent]);

//     config = merge(config, appearanceProps, intentProps);
//   } catch (error) {
//     console.error(error);
//   }

//   if (size && size in variants.size) {
//     config = merge(
//       config,
//       variants.size[size as keyof typeof variants.size] as ComponentConfigProps
//     );
//   }

//   return config;
// };
