import React, { Component } from "react";
import MainLayout from "../../components/layouts/mainLayout";
import axios from "axios";

const Profile = props => {
  console.log(props);
  return (
    <>
      <MainLayout>
        <h1>User Profile: </h1>
        <h2>Name: {props.user.name}</h2>
        <h2>Phone: {props.user.phone}</h2>
        <h2>Email: {props.user.email}</h2>
      </MainLayout>
    </>
  );
};

Profile.getInitialProps = async props => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${props.query.userId}`
    );
    return { user: response.data };
  } catch (error) {
    console.error(error);
  }
};

export default Profile;
