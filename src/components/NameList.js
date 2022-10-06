import React from "react";
import { Games } from "../assets/data_js/boardGames";
import * as Animals from "../assets/data/animals/common.json";
import data from "../assets/data/data";
import Sports from "./Sports";

function NameList() {
  // const GameList = Games.games.map((G) => <h2>{G}</h2>)
  const soullist = data.eplTeams.epl_teams.map((S) => (
    <Sports key={S.code} sports={S} />
  ));
  // console.log(Animals.animals);
  console.log(data.eplTeams.epl_teams);
  return (
    <div>
      {/* <h2>{Games.games[0]}</h2>
       <h2>{Games.games[1]}</h2>
       <h2>{Games.games[2]}</h2>
       <h2>{Games.games[3]}</h2>
       <h2>{Games.games[4]}</h2>
       <h2>{Games.games[5]}</h2>
       <h2>{Games.games[6]}</h2>
       <h2>{Games.games[7]}</h2> */}
      <table className="table ">
        <thead>
          <tr>
          <th className="col" scope="row">
            Code
          </th>
          <th className="col" scope="row">
            Name
          </th>
          <th className="col" scope="row">
            City
          </th>
          <th className="col" scope="row">
            Stadim
          </th>
          <th className="col" scope="row">
            Manager
          </th></tr>
        </thead>

        {soullist}
      </table>
    </div>
  );
}

export default NameList;
