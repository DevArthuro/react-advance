import Login from "@/app/login/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Test for login page", () => {
  describe("Rendering", () => {
    it("should render login page", () => {
      render(<Login />);
      /** We have connected the label with input */
      expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
      expect(screen.getByRole("buttonFormLogin")).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("Should save data in inputs", async () => {
      render(<Login />);
      const email = screen.getByLabelText(/Email/);
      const password = screen.getByLabelText(/Password/);

      await userEvent.type(email, "test@example.com");
      await userEvent.type(password, "1234");

      expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
      expect(screen.getByDisplayValue("1234")).toBeInTheDocument();
    });

    it("Should save data in inputs and send", async () => {
      const { getByLabelText, getByDisplayValue, getByRole } = render(
        <Login />
      );

      /** Modify on Submit and verify if it called */
      const handleSubmit = jest.fn();
      const form = screen.getByTestId("form");
      form.onsubmit = handleSubmit;

      const email = getByLabelText(/Email/);
      const password = getByLabelText(/Password/);

      await userEvent.type(email, "test@example.com");
      await userEvent.type(password, "1234");

      expect(getByDisplayValue("test@example.com")).toBeInTheDocument();
      expect(getByDisplayValue("1234")).toBeInTheDocument();

      const button = getByRole("buttonFormLogin");
      await userEvent.click(button);

      // If it called
      expect(handleSubmit).toHaveBeenCalled();
    });

    it("Should be failed with wrong credentials", async () => {
      const { getByLabelText, getByRole } = render(<Login />);
      const email = getByLabelText(/Email/);
      const password = getByLabelText(/Password/);

      await userEvent.type(email, "test.wrong@example.com");
      await userEvent.type(password, "1234");

      const button = getByRole("buttonFormLogin");
      await userEvent.click(button);

      expect(await screen.findByText(/Error:/)).toBeInTheDocument();
    });

    it("Should be Success with correct credentials", async () => {
      const { getByLabelText, getByRole } = render(<Login />);
      const email = getByLabelText(/Email/);
      const password = getByLabelText(/Password/);

      await userEvent.type(email, "test@test.com");
      await userEvent.type(password, "1234");

      const button = getByRole("buttonFormLogin");
      await userEvent.click(button);

      expect(await screen.findByText(/Success:/)).toBeInTheDocument();
    });
  });
});
