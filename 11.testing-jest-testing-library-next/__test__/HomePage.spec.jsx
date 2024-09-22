import Home from "@/app/page";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  describe("Rendering", () => {
    it("renders the home page", () => {
      render(<Home />);
      expect(screen.getByText("Home page")).toBeInTheDocument();
    });

    it("renders the home page with button", () => {
      render(<Home />);
      expect(
        screen.getByRole("button", { name: "Click me" })
      ).toBeInTheDocument();
    });

    it("should have input field with label Enter Random Text", () => {
      render(<Home />);
      expect(screen.getByRole("randomText")).toBeInTheDocument();
      expect(screen.getByLabelText(/Enter Random/)).toBeInTheDocument();
    });

    it("should have input field with label Specifict Text", () => {
      render(<Home />);
      expect(screen.getByRole("inputSpecifict")).toBeInTheDocument();
      expect(screen.getByLabelText(/Specifict Text/)).toBeInTheDocument();
    });

    it("should have input with specifict place holder", () => {
      render(<Home />);
      expect(screen.getByPlaceholderText(/Searching/)).toBeInTheDocument();
    });

    it("should have input with value defined", () => {
      render(<Home />);
      screen.getByDisplayValue(/Audi Q5/);
    });

    it("should not find element with text: This is the text!", () => {
      render(<Home />);
      expect(screen.queryByText("This is the text!")).not.toBeInTheDocument();
    });
  });
  describe("Behavior", () => {
    it("Should click on show text button and find new text", async () => {
      render(<Home />);
      expect(screen.queryByText("This is the text!")).not.toBeInTheDocument();
      const showTextButton = screen.getByRole("button", { name: "Show Text" });
      await userEvent.click(showTextButton);
      // In some cases this not apper inmediattle.
      //expect(screen.getByText("This is the text!")).toBeInTheDocument();

      // Need use waitfor
      // await waitFor(
      //   () => {
      //     expect(screen.getByText("This is the text!")).toBeInTheDocument();
      //   },
      //   {
      //     // It can be modified depends of the times
      //     timeout: 1200,
      //   }
      // );

      // Note: this is the way recommended
      // If you need conbined the get and waitFor use query find
      expect(
        await screen.findByText(
          "This is the text!",
          {},
          {
            timeout: 1200,
          }
        )
      ).toBeInTheDocument();
    });
  });
});
