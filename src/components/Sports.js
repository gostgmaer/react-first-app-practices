import React from "react";

function Sports(S) {
  // console.log(S);
  return (
    <tbody>
      <tr>
        <th className="col" scope="row">
          {S.sports.code}
        </th>
        <td className="col">{S.sports.name}</td>
        <td className="col">{S.sports.city}</td>
        <td className="col">{S.sports.stadium}</td>
        <td className="col">{S.sports.manager}</td>
      </tr>

      {/* <h2>
        My Team Name is {S.sports.name}, Location is {S.sports.city}, Manager
        Name is {S.sports.manager}
      </h2> */}
    </tbody>
  );
}

export default Sports;
