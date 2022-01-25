import React, { ChangeEvent, FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiUrl from "apiConfig";
import { Email, GameContent, MajorChoice, PlayerProfile, TeamLog } from "components";
import { characterDetails, Majors,  IUser } from "models";
import "./styles.scss";

const io = require("socket.io-client");
let socket;

export const PlayGame: FC<{ location: Location }> = ({ location }) => {
  const [users, setUsers] = useState([] as IUser[]);
  const [game, setGame] = useState('')
  const [character, setCharacter] = useState(characterDetails.engineering);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(false) // TODO: switch back!

  function handleMajorChange(event: ChangeEvent) {
    const { value } = event.target as HTMLSelectElement
    setCharacter(characterDetails[value as Majors])
  }

  useEffect(() => {
    const game = location.search.substring(6, 10);
    setGame(game)

    socket = io(apiUrl);
    socket.on("roomData", ({ users }: { users: IUser[] }) => {
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
          {isSubmitted
            ? (<>
              <GameContent game={game} />
              <PlayerProfile character={character} />
            </>)
            : <MajorChoice onMajorChange={handleMajorChange} onSubmit={() => setIsSubmitted(true)} />
          }
        </section>
      )}
    </main>
  );
};
