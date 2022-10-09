import React from 'react'
import { pokemon } from "../assets/data/data";

function Columns() {
    const items = pokemon.pokemon
    console.log(items);
  return (
    // <React.Fragment>
    //     {/* {items.map(item =>(
    //         <React.Fragment key={item.id}> 
    //             <h1>Name</h1>
    //             <p>{item.name}</p>
    //              </React.Fragment>
    //     ))} */}
    //     <td>Name</td>
    //     <td>First Name</td>

    // </React.Fragment>

    <>
    {/* {items.map(item =>(
        <React.Fragment key={item.id}> 
            <h1>Name</h1>
            <p>{item.name}</p>
             </React.Fragment>
    ))} */}
    <td>Name</td>
    <td>First Name</td> 

</>
  )
}

export default Columns