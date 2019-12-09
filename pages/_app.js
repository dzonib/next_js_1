import React from "react";
import App from "next/app";
import { Auth0Provider } from "use-auth0-hooks";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Auth0Provider
        domain={"king-kong.eu.auth0.com"}
        clientId={"zHtSGVTyQDeiYJoDtlM77ODjMRS0OCd1"}
        redirectUri={"http://localhost:3000"}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    );
  }
}

export default MyApp;
