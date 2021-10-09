import React from "react";
import PropTypes from "prop-types";

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        maxHeight: "800px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
