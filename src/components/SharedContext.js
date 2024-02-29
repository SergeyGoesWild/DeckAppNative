import React, { createContext, useContext, useState } from "react";

const SharedContext = createContext();

export const useSharedContext = () => {
  return useContext(SharedContext);
};

export const SharedProvider = ({ children }) => {
  const [contextDeck, setContextDeck] = useState(null);
  const [chosenCard, setChosenCard] = useState(null);
  const [chosenDeck, setChosenDeck] = useState(null);
  const [ready, setReady] = useState(false);

  const updateContextDeck = (newValue) => {
    setContextDeck(newValue);
  };

  const updateChosenCard = (newValue) => {
    setChosenCard(newValue);
  };

  const updateChosenDeck = (newValue) => {
    setChosenDeck(newValue);
  };

  const readyOn = () => {
    setReady(true);
  };

  const readyOff = () => {
    setReady(false);
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
        ready,
        readyOn,
        readyOff,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};
