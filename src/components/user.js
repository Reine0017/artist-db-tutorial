import React from "react";

import UserHoc from "./hoc/userHoc";

const User1 = (props) => {
  console.log("props from UserHoc: ", props);
  return <div>User 1</div>;
};

const User2 = (props) => {
  return <div>User 2</div>;
};

export default UserHoc(User1, User2, "Hello I am");
