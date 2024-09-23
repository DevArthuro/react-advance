import Users from "@/app/users/page";
import { act, render, screen, waitFor } from "@testing-library/react";
import { server } from "./mocks/server";
import { rest } from "msw";

describe("Test for page users", () => {
  describe("Rendering", () => {
    it("should render the page", async () => {
      render(<Users />);
      expect(screen.getByText(/Wait for user/)).toBeInTheDocument();
      expect(
        await screen.findByText(
          "carlos",
          {},
          {
            timeout: 1000,
          }
        )
      ).toBeInTheDocument();
      expect(screen.queryByText(/Wait for user/)).not.toBeInTheDocument();
    });

    it("Should be render name Mike", async () => {
      server.use(
        rest.get("/api/users", (_, res, ctx) => {
          return res(ctx.json([{ id: 1, userName: "Mike" }]));
        })
      );
      render(<Users />);
      expect(await screen.findByText("Mike")).toBeInTheDocument();
    });
  });
});
