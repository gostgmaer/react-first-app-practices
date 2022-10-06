import React from "react";
import * as Data from "../assets/data/data";
import PokemonTbody from "./PokemonTbody";

function PokemonTable() {
    //  console.log(Data.pokemon.pokemon[0]);
  const PokemonTable = Data.pokemon.pokemon.map((pokemon, index) => (
    <PokemonTbody key={pokemon.id} pokemon={pokemon} />
  ));
  return (
    <div>
      <table className="table" >
        <thead className="bg-secondary">
        <tr>
        <th>ID</th>
          <th>Name</th>
          <th>Height</th>
          <th>identifier</th>
          <th>name_jp_romaji</th>
          <th>name_phonetic</th>
          <th>lvl_100_exp</th>
          <th>catch_rate</th>
          <th>weight</th>
          <th>species</th>
          <th>exp_yield</th>
          <th>base_happiness</th>
          <th>jdex_old</th>
          
         
        </tr></thead>
        <tbody>
        {Data.pokemon.pokemon.map((val, key) => {
          return (
            <tr key={key}>
                <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.height}</td>
              <td>{val.identifier}</td>
              <td>{val.name_jp_romaji}</td>
              <td>{val.name_phonetic}</td>
              <td>{val.lvl_100_exp}</td>
              <td><button type="button" className="btn btn-primary">{val.catch_rate}</button></td>
              <td>{val.weight}</td>
              <td>{val.species}</td>
              <td>{val.exp_yield}</td>
              <td  className="bg-danger" >{val.base_happiness}</td>
              <td>{val.jdex_old}</td>
              
            </tr>
          );
        })}</tbody>
      </table>
    </div>
  );
}

export default PokemonTable;
