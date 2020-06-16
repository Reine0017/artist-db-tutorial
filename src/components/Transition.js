import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "../css/App.css";

function TransitionComp() {
  const [show, setShow] = useState(true);
  const showDivFn = () => {
    setShow(!show);
  };
  return (
    <>
      <Transition
        in={show}
        timeout={500}
        //   can choose to disable states
        //   the following only leaves enter and exit states
        //enter={false}
        //exit={false}
        onEntered={(node) => {
          console.log("ENTER");
          //this could be a function/network request, etc
        }}
        onExited={(node) => {
          console.log("EXITED");
        }}
      >
        {(show) => {
          return <div className={`square square-${show}`}>{show}</div>;
        }}
      </Transition>
      {/* <Transition in={show} timeout={1000} unmountOnExit>
        {(show) => (
          <div
            style={{
              background: "red",
              height: "100px",
              transition: "all 2s ease",
              opacity: show === "exited" || show === "exiting" ? 0 : 1,
            }}
          >
            show
          </div>
        )}
      </Transition> */}
      {/* {show ? <div style={{ background: "red", height: "100px" }}></div> : null} */}
      <button onClick={showDivFn}>Show/Hide</button>
    </>
  );
}

export default TransitionComp;
