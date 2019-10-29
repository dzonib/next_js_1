import React from "react";
import Link from "next/link";

const Header = () => (
  <>
    <h1>MyApp yo</h1>
    <nav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        -{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
        -{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        -
        <Link href="/users">
          <a>Users</a>
        </Link>{" "}
        -
      </div>
    </nav>
  </>
);

export default Header;
