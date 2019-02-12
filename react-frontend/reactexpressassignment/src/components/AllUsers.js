import React from "react";

export const Location = ({ name, climate, terrain }) => {
  return (
    <li>
      Name: {name}
      <br />
      Climate: {climate === "TODO" ? 'Unknown' : climate}
      <br />
      Terrain: {terrain === "TODO" ? 'Unknown' : terrain}
      <br />
    </li>
  );
};
