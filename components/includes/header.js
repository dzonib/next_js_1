import React from "react";
import Link from "next/link";

import { useAuth } from "use-auth0-hooks";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/">
              <a className="navbar-brand">My Awesome app</a>
            </Link>

            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <Link href="/">
                  <a className="nav-item nav-link">Home</a>
                </Link>
                <Link href="/contact">
                  <a className="nav-item nav-link">Contact</a>
                </Link>
                <Link href="/about">
                  <a className="nav-item nav-link">About us</a>
                </Link>
                <Link href="/users">
                  <a className="nav-item nav-link">Users</a>
                </Link>

                <span
                  className="nav-item nav-link"
                  onClick={() =>
                    login({ appState: { returnTo: { pathname, query } } })
                  }
                >
                  Login
                </span>
                <span
                  className="nav-item nav-link"
                  onClick={() => alert("Logout")}
                >
                  Logout
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
