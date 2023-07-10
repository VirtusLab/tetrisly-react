import { describe } from "vitest";
import { stylesBuilder } from "./stylesBuilder";

describe("stylesBuilder", () => {
  it("should return correct color for default variant", () => {
    const props = {
      variant: "Default",
      appearance: "primary",
      intent: "none",
      size: "medium",
    } as const;

    const result = stylesBuilder(props);

    expect(result).toEqual({
      alignItems: "center",
      backgroundColor: {
        _: "action-primary-normal",
        active: "action-primary-active",
        hover: "action-primary-hover",
        selected: "action-primary-selected",
      },
      borderRadius: "medium",
      boxShadow: "bottom-100",
      color: "action-inverted-normal",
      display: "inline-flex",
      h: "300",
      justifyContent: "center",
      opacity: {
        disabled: "disabled",
      },
      outlineColor: {
        focus: "interaction-focus-default",
      },
      outlineOffset: 2,
      outlineWidth: {
        focus: "focus",
      },
      pointerEvents: {
        disabled: "none",
        loading: "none",
      },
      px: "200",
      text: "body-medium",
      textAlign: "center",
      transition: true,
      transitionDuration: 200,
      whiteSpace: "nowrap",
    });
  });
});
