import React, { useState, Fragment } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const usersDataHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={usersDataHandler} />
      <UsersList data={users} />
    </Fragment>
  );
}

export default App;
