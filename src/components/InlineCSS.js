import React from "react";

function InlineCSS() {
    const heading = {
        fontSize:"44px",
        color:"Red"
    }
  return (
    <div>
      <h1 style={heading} >InlineCSS</h1>
    </div>
  );
}

export default InlineCSS;
