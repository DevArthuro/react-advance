import React from "react";
import { render, screen } from "@testing-library/react";
import FormLogin from "@/components/FormLogin";
import userEvent from "@testing-library/user-event";

describe("test component form", () => {
  it("should render correctly", () => {
    render(<FormLogin />);

    expect(screen.getByTestId("form")).toBeVisible();
  });

  it("Should be called the function with click button", async () => {
    render(<FormLogin />);

    const { click } = userEvent.setup();
    const button = screen.getByRole("button");
    const formElement = screen.getByTestId("form");

    const handleOnClick = jest.fn();

    formElement.onclick = handleOnClick;

    expect(button).toBeVisible();

    await click(button);

    expect(button).toBeVisible();

    expect(handleOnClick).toHaveBeenCalled();
  });
});
