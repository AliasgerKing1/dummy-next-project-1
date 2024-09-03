import { getUsers } from "@/services/User.service";
import styles from "./page.module.css";
import Link from "next/link";
import DeleteButton from "@/shared/DeleteButton";

let Home = async () => {
  let userData = await getUsers();

  return (
    <>
      <h1>User list</h1>
      {userData.map((user) => (
        <h3 key={user.id}>
          <Link href={`user/${user.id}`}>{user.firstName}</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <Link href={`user/${user.id}/update`}>Edit</Link>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <DeleteButton id={user.id} />
          </span>
        </h3>
      ))}

      <h1>Product list</h1>
      {userData.map((user) => (
        <h3 key={user.id}>
          <Link href={`user/${user.id}`}>{user.firstName}</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <Link href={`user/${user.id}/update`}>Edit</Link>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <DeleteButton id={user.id} />
          </span>
        </h3>
      ))}
    </>
  );
};

export default Home;
