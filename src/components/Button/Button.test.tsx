import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("should render the button", () => {
    const { getByRole } = render(<Button />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render correct text", () => {
    const { getByRole } = render(<Button />);
    expect(getByRole("button")).toHaveTextContent("Click me");
  });

  it("should render correct text when clicked", async () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    await userEvent.click(button);
    expect(button).toHaveTextContent("Clicked");
  });

  it("should be disabled when clicked", async () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    await userEvent.click(button);
    expect(button).toBeDisabled();
  });
});
