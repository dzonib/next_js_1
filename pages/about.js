import React, { Component, useEffect } from "react";
import MainLayout from "../components/layouts/mainLayout";
import Message from "../components/includes/message";
import Router from "next/router";

function About() {
  useEffect(() => {
    // Works something like angular guard when using back and forward
    // Router.beforePopState(({ url, as, options }) => {
    //   if (as === "/contact") {
    //     window.location.href = "/whatever";
    //     return false;
    //   }

    //   return true;
    // });

    // replace current url with given one (redirect)
    // second param is AS => change the look of url
    // so.. redirect and replace (replace is optional)
    // WE DO REDIRECTION LIKE THIS IN SCRIPT (NOT IN LINK)
    Router.replace("/contact", "/testact");
  }, []);
  return (
    <>
      <MainLayout>
        <h1>About</h1>
        <Message />
        <br />
        {/* When you cant use withRouter() use router this way if you need its functionalities*/}
        {/* <span onClick={() => Router.push("/contact")}>Click me now</span> */}
        <span onClick={() => Router.push("/users/profile/1")}>
          Click me now
        </span>
      </MainLayout>
    </>
  );
}

export default About;
