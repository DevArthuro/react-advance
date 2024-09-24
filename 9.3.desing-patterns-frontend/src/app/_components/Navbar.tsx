import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/HOC">Hight Order Component (HOC)</Link>
          </li>
          <li>
            <Link href="/presentational">Presentational Container</Link>
          </li>
          <li>
            <Link href="/provider">Provider</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
