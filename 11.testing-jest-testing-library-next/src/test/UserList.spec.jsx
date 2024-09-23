import Users from "@/app/users/page";
import { act, render, screen, waitFor } from "@testing-library/react";

describe("Test for page users", () => {
  describe("Rendering", () => {
    it("should render the page", async () => {
      render(<Users />);
      expect(
        await screen.findByText(
          "carlos",
          {},
          {
            timeout: 1000,
          }
        )
      ).toBeInTheDocument();
    });
  });
});
