import React, { useState, useEffect } from "react";
import axios from "axios";

import MainLayout from "../layouts/mainLayout";

const Home = ({ name, lastname }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userFromProps = {
      name,
      lastname
    };
    setUser(userFromProps);
  }, [name, lastname]);

  console.log(user);
  return (
    <>
      <MainLayout>
        <h1>
          Wellcome Mr. {user.name} {user.lastname}
        </h1>
      </MainLayout>
    </>
  );
};

Home.getInitialProps = () => {
  return { name: "King", lastname: "Kong" };
};

export default Home;
