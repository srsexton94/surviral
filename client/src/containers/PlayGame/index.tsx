import React, { ChangeEvent, FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiUrl from "apiConfig";
import { Email, GameContent, MajorChoice, PlayerProfile, TeamLog } from "components";
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
          {isSubmitted
            ? <PlayerProfile character={character} />
            : <MajorChoice onMajorChange={handleMajorChange} onSubmit={() => setIsSubmitted(true)} />
          }
        </section>
      )}
    </main>
  );
};
