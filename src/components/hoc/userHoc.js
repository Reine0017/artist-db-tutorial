import React from "react";

//you can call 'wrappedComponent' however you want
const UserHoc = (WrappedComponent1, WrappedComponent2, arg1) => {
  return (props) => (
    <>
      {console.log(props)}
      {arg1}
      <WrappedComponent1 {...props} />
      <WrappedComponent2 />
    </>
  );
};

export default UserHoc;
