import React, { ChangeEvent, FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiUrl from "apiConfig";
import { Email, GameContent, TeamLog } from "components";
import { snakeToSentenceCase } from "helpers";
import {
  characterDetails,
  Majors,
  ICharacterDetails,
  tempIUsers,
} from "models";
import "./styles.scss";

const io = require("socket.io-client");
let socket;

export const PlayGame: FC<{ location: Location }> = ({ location }) => {
  const [users, setUsers] = useState([] as tempIUsers);
  const [character, setCharacter] = useState({} as ICharacterDetails);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(true)

  function handleMajorChange(event: ChangeEvent) {
    const { value } = event.target as HTMLSelectElement
    setCharacter(characterDetails[value as Majors])
  }

  useEffect(() => {
    const game = location.search.substring(6, 10);
    socket = io(apiUrl);
    socket.on("roomData", ({ users }: { users: tempIUsers }) => {
      setUsers(users.filter((user) => user.game === game));
    });
  }, [location]);

  return (
    <main className="Play-Game">
      <Link to="/">
        <button className="admin-button" aria-label="Quit game">Quit</button>
      </Link>
      {isEmailOpen && <Email onClose={() => setIsEmailOpen(false)}/> }
      {!isEmailOpen && (
        <section>
          <TeamLog users={users} />
          <GameContent />
          {!isSubmitted &&
            <form id="char-choice" className="char-choice" onSubmit={() => setIsSubmitted(true)}>
              <h1>
                Welp. Not the semester you imagined... but you still gotta study.
              </h1>
              <label htmlFor="majors">What's your major?</label>
              <select id="majors" name="majors" onChange={handleMajorChange}>
                {Majors &&
                  Object.values(Majors).map((character, i) => (
                    <option key={i} value={character}>
                      {snakeToSentenceCase(character)}
                    </option>
                  ))}
              </select>
              <input type="submit"></input>
            </form>
          }
          {isSubmitted && 
            <section className="player-profile">
              <img src={character.image} alt="" aria-hidden />
              <section className="char-descrip">
                <h3>{character.title}</h3>
                <p>{character.description}</p>
              </section>
            </section>
          }
        </section>
      )}
    </main>
  );
};
