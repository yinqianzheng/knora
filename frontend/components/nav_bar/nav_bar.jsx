import React from "react";

export default props => {
  return (
    <div>
      nav bar
      <button onClick={props.logout}>logout</button>
    </div>
  );
};
