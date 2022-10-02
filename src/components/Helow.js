import React from "react";

const Helow = (props) => {
  //   return (
  //     <div>Helow</div>
  //   )

  return React.createElement(
    "div",
    { id: "name", className: "new-div class-top" },
    React.createElement("h1", null, "Welcome Brother")
  );
};

export default Helow;
