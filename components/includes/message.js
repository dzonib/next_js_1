import React from "react";
import { withRouter } from "next/router";

const Message = props => {
  const handler = () => {
    // second arg is what is going to be shown
    props.router.push(
      {
        pathname: "/users/profile",
        query: { userId: 1 }
      },
      // what is going to be shown
      "/users/profile/1"
    );
  };

  return (
    <>
      <div>Hello</div>
      <div>I am {props.router.pathname} page</div>
      <div>
        Click <span onClick={handler}>here</span> to read more
      </div>
    </>
  );
};

export default withRouter(Message);
