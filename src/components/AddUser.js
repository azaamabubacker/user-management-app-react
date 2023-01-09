import React, { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";
import "./Users/AddUser.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid age.",
      });
      return;
    }
    const usersData = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    };

    props.onAddUser(usersData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="form_control">
        <div>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              onChange={userNameHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              name=""
              id="age"
              value={enteredAge}
              onChange={ageHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default AddUser;
