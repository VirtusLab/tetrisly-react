import { Theme } from "@/theme";
import { SystemProp, SystemProps } from "@xstyled/styled-components";

type Config = {
  shape: Record<"rounded" | "square", SystemProps>;
  sizes: SystemProps<Theme>["w"][];
};

export const config = {
  shape: {
    rounded: {
      borderRadius: "full",
    },
    square: {
      borderRadius: "large",
    },
  },
  sizes: ["small", "medium", "large", "ssdcxzxx"],
} satisfies Config;
