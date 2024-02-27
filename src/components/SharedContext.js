import React, { createContext, useContext, useState } from "react";

const SharedContext = createContext();

export const useSharedContext = () => {
  return useContext(SharedContext);
};

export const SharedProvider = ({ children }) => {
  const [contextDeck, setContextDeck] = useState("");
  const [chosenCard, setChosenCard] = useState("");
  const [chosenDeck, setChosenDeck] = useState("");

  const updateContextDeck = (newValue) => {
    setContextDeck(newValue);
  };

  const updateChosenCard = (newValue) => {
    setChosenCard(newValue);
  };

  const updateChosenDeck = (newValue) => {
    setChosenDeck(newValue);
  };

  return (
    <SharedContext.Provider
      value={{
        contextDeck,
        updateContextDeck,
        chosenCard,
        updateChosenCard,
        chosenDeck,
        updateChosenDeck,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};
