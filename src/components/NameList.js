import React from "react";
import { Games } from "../assets/data_js/boardGames";
import * as Animals from "../assets/data/animals/common.json";
import data from "../assets/data/data";
import Sports from "./Sports";
import CreateIndex from "./CreateIndex";

function NameList() {
  // const GameList = Games.games.map((G) => <h2>{G}</h2>)
  const soullist = data.eplTeams.epl_teams.map((S, index) => (
    <Sports key={index} sports={S} />
  ));

  let pokemon = data.pokemon.pokemon.map((name, index) => (
    <span key={index}>
      {index} {name.name}
      <br></br>{" "}
    </span>
  ));
  // console.log(data.pokemon);
  // console.log(Animals.animals);
  // console.log(index);
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
            </th>
          </tr>
        </thead>

        {soullist}
      </table>

      <span>{pokemon}</span>
      {/* <div>
        <ul class="list-group">
          <li class="list-group-item">asasd</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div> */}
    </div>
  );
}

export default NameList;
