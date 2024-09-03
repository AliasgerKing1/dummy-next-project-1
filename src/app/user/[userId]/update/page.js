"use client";
import { addUser, getCurrentUser, updateUser } from "@/services/User.service";
import { useEffect, useState } from "react";

const UpdateUser = ({ params: { userId } }) => {
  const [requestData, setRequestData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  let fetchCurrentUser = async () => {
    let response_data = await getCurrentUser(userId);
    console.log(response_data);
    setRequestData(response_data);
  };

  let handleUpdateUser = async () => {
    let response = await updateUser(userId, requestData);
    if (response.status === 200) {
      alert("User updated successfully");
    } else {
      alert("User updataion unsuccessful");
    }
  };

  return (
    <>
      <h1>Update Users</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={requestData.firstName}
          onChange={(e) =>
            setRequestData({ ...requestData, firstName: e.target.value })
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
        <button type="button" onClick={handleUpdateUser}>
          Update User
        </button>
      </form>
    </>
  );
};

export default UpdateUser;
