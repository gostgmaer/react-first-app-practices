import React from "react";

function Sports(S) {
  // console.log(S);
  return (
    <div>
      <table className="table ">
        <thead>
          {/* <tr>
            <th>Team Code</th>
            <th>Team Name</th>
            <th>Location</th>
            <th>Stadium</th>
            <th>Manager</th>
          </tr> */}
        </thead>
        <tbody className="col-6">
          <tr>
            <th className="col" scope="row">{S.sports.code}</th>
            <td className="col">{S.sports.name}</td>
            <td className="col">{S.sports.city}</td>
            <td className="col">{S.sports.stadium}</td>
            <td className="col">{S.sports.manager}</td>
          </tr>
        </tbody>
      </table>

      {/* <h2>
        My Team Name is {S.sports.name}, Location is {S.sports.city}, Manager
        Name is {S.sports.manager}
      </h2> */}
    </div>
  );
}

export default Sports;
