import React from "react";

// function Greed() {
//   return (
//     <h1>Welcome Kishor</h1>
//   )
// }
const Greed = ({name,heroname}) => {
  console.log(name);
  return (
    <div>
      <h1>Kishor {name}</h1>
      {heroname}
    </div>
  );
};

export default Greed;
