import React, { useState, useEffect, FC, FormEvent }  from 'react'
import { Link } from 'react-router-dom'

import apiUrl from 'apiConfig'
import { Email, GameContent, TeamLog } from 'components'
import { characterDetails, Characters, ICharacterDetails, tempIUsers } from 'models';
import { snakeToSentenceCase } from 'helpers';
import './styles.scss';

const io = require('socket.io-client');
let socket;

export const PlayGame: FC<{ location: Location }> = ({ location }) => {
  const [users, setUsers] = useState([] as tempIUsers)
  const [character, setCharacter] = useState({ title: '', description: '' } as ICharacterDetails)

  function chooseMajor(event: FormEvent) {
    event.preventDefault()
    const target = event.target as HTMLSelectElement
    const { value: major } = target.children[1] as HTMLSelectElement

    const profileImg = document.getElementById('profile-img')
    if (profileImg) profileImg.classList.add(major)

    setCharacter(characterDetails[major as Characters])

    const [playerProfile, letsPlay, charChoice] = ['player-profile', 'lets-play', 'char-choice'].map(id => document.getElementById(id))
    if (playerProfile) playerProfile.style.display = 'block'
    if (letsPlay) letsPlay.style.display = 'block'
    if (charChoice) charChoice.style.display = 'none'
  }

  useEffect(() => {
    const game = location.search.substring(6, 10)
    socket = io(apiUrl)
    socket.on('roomData', ({ users }: { users: tempIUsers }) => {
      setUsers(users.filter(user => user.game === game))
    })
  }, [location]);

  return (
    <main className="Play-Game">
      <Email />
      <Link to="/">
        <button className="admin-button">X</button>
      </Link>
      <section>
        <TeamLog users={users} />
        <GameContent />
        <form id="char-choice" className="char-choice" onSubmit={chooseMajor}>
          <h1>Welp. Not the semester you imagined... but you still gotta study.</h1>
          <select id="majors" name="majors">
            <legend>What's your major?</legend>
            {Characters && Object.values(Characters).map((character, i) => (
              <option key={i} value={character}>{snakeToSentenceCase(character)}</option>
            ))}
          </select>
          <input type="submit"></input>
        </form>
        <section id="player-profile" className="player-profile">
          <img id="profile-img" src="" alt="" aria-hidden />
          <section className="char-descrip">
            <h3>{character.title}</h3>
            <p>{character.description}</p>
          </section>
        </section>
      </section>
    </main>
  )
}
