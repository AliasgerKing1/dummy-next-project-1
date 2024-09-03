import { getCurrentUser } from "@/services/User.service";

const User = async ({ params: { userId } }) => {
  let user = await getCurrentUser(userId);
  return (
    <>
      <h1>User Details</h1>
      <h2>Id : {user.id}</h2>
      <h2>
        Name : {user.firstName} {user.lastName}
      </h2>
      <h2>Card : {user.bank.cardNumber}</h2>
    </>
  );
};

export default User;
