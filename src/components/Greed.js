
import React from 'react'

// function Greed() {
//   return (
//     <h1>Welcome Kishor</h1>
//   )
// }
const Greed = (props) => {
    console.log(props);
    return (
    <div>
    <h1>Kishor {props.name}</h1>
    {props.children}
    </div>)
}

export default Greed
