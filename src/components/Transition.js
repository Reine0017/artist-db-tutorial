import React, { useState, Component } from "react";
import { Transition } from "react-transition-group";

function TransitionComp() {
  const [show, setShow] = useState(false);
  const showDivFn = () => {
    setShow(!show);
  };
  return (
    <>
      <Transition in={show} timeout={1000} unmountOnExit>
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
      </Transition>
      {/* {show ? <div style={{ background: "red", height: "100px" }}></div> : null} */}
      <button onClick={showDivFn}>Show/Hide</button>
    </>
  );
}

export default TransitionComp;
