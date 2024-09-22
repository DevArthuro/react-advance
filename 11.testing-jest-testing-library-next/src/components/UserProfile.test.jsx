import UserProfile from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("User Profile Testing", () => {
  describe("Rendering", () => {
    it("should render user profile page when email is verified", () => {
      render(
        <UserProfile
          displayName="Carlos Orrego"
          username="DevArthuro"
          email="calos.orrego@gmail.com"
          isEmailVerified={true}
        />
      );

      expect(screen.getByText(/Email verified/)).toBeInTheDocument();
    });

    it("Should render user profile page when email is not verfied", () => {
      render(
        <UserProfile
          displayName="Carlos Orrego"
          username="DevArthuro"
          email="calos.orrego@gmail.com"
          isEmailVerified={false}
        />
      );

      expect(screen.queryByText(/Email verified/)).not.toBeInTheDocument();
    });

    it("Should render ... if displayname is grather to 30 character", () => {
      render(
        <UserProfile
          displayName="Carlos Orrego DIAZZZZZZZZSFDAFDFASDF"
          username="DevArthuro"
          email="calos.orrego@gmail.com"
          isEmailVerified={false}
        />
      );

      const displayName = screen.getByText(/Display name/);
      expect(displayName).toHaveTextContent(/.*\.\.\./);
    });

    it("Should be render displayName completly if the lenth is less than 30", () => {
      render(
        <UserProfile
          displayName="Carlos Orrego"
          username="DevArthuro"
          email="calos.orrego@gmail.com"
          isEmailVerified={false}
        />
      );

      const displayName = screen.getByText(/Display name/);
      expect(displayName).not.toHaveTextContent(/.*\.\.\./);
    });
  });
});
