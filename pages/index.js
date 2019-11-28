import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
// import MyStyle from "../styles/main.css";

const Home = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  return (
    <>
      <MainLayout>
        <h1>Pick a user</h1>
        <ul className="list-group">
          {users.map(user => {
            return (
              <li key={user.id} className="list-group-item">
                {/* this one gives error for some reason */}
                {/* <Link href={`/users/profile/?userId=${user.id}`}> */}
                <Link
                  as={`/users/profile/${user.id}`}
                  href={{
                    pathname: "/users/profile",
                    query: {
                      userId: user.id
                    }
                  }}
                >
                  <a>{user.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </MainLayout>
    </>
  );
};

Home.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  console.log("Initial props runned");
  // current path / in our case
  // console.log(pathname);
  // console.log(query);
  // console.log(req);
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { users: response.data };
  } catch {
    console.log("error");
  }
};

export default Home;
