"use client";
import { addUser } from "@/services/User.service";
import { useState } from "react";

const AddUser = () => {
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleAddUser = async () => {
    let response = await addUser(requestData);
    if (response.status === 201) {
      alert("User added successfully");
    } else {
      alert("Failed to add user");
    }
  };
  return (
    <>
      <h1>Add Users</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={requestData.name}
          onChange={(e) =>
            setRequestData({ ...requestData, name: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={requestData.email}
          onChange={(e) =>
            setRequestData({ ...requestData, email: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={requestData.password}
          onChange={(e) =>
            setRequestData({ ...requestData, password: e.target.value })
          }
        />
        <br />
        <br />
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </>
  );
};

export default AddUser;
