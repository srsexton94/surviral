import React, { FC, useEffect } from "react";
import { ICharacterDetails } from "models";
import "./styles.scss";

export const PlayerProfile: FC<{ character: ICharacterDetails }> = ({ character }) => {
  
  useEffect(() => {
    console.log({ character })
  }, [character]);
  
  return (
    <section className="player-profile">
      <img src={character.image} alt="" aria-hidden />
      <section className="char-descrip">
        <h3>{character.title}</h3>
        <p>{character.description}</p>
      </section>
    </section>
  );
};
