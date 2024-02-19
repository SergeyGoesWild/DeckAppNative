import React from "react";
import OneCard from "./OneCard";

function OneDeckContent({ deckContent }) {
  return (
    <>
      {deckContent.map((item) => (
        // TODO: Pass whole item, not only name
        <OneCard key={item.id} name={item.name} />
      ))}
    </>
  );
}

export default OneDeckContent;
