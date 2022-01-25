import { ICharacterDetails } from "models";
import React, { FC } from "react";

import "./styles.scss";

export const PlayerProfile: FC<{ character: ICharacterDetails }> = ({ character }) => {
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
