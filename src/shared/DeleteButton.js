"use client";

import { deleteUser } from "@/services/User.service";

const DeleteButton = ({ id }) => {
  let handleDelete = async () => {
    let response = await deleteUser(id);
    let res_id = response.data.id;
    if (response.status === 200) {
      alert(`User ${res_id} is deleted successfully`);
    }
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
