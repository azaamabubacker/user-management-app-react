import React, { useState } from "react";
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
    <div>
      <AddUser onAddUser={usersDataHandler} />
      <UsersList data={users} />
    </div>
  );
}

export default App;
