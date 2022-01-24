import React, { FC, useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import apiUrl from 'apiConfig';
import { PlayerList } from 'components';
import { ISocket, tempIUsers } from 'models';
import './styles.scss';

const io = require('socket.io-client');
let socket: ISocket;

const setupErrors = {
  tooManyPlayers: 'Sorry! Only 5 can play, better luck next time!',
  noName: 'Please enter a name (any name! be creative!)'
}

export const SetPlayer: FC<{ location: Location }> = ({ location }) => {
  const [formId, inputId, errorId] = ['username-form', 'username-input', 'username-error']
  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const [users, setUsers] = useState([] as tempIUsers)
  const [userMessage, setUserMessage] = useState('')
  const [error, setError] = useState('')
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  function joinUserToGame(event: FormEvent) {
    event.preventDefault()
    const { value } = event.target as HTMLFormElement
    const hasError = users.length >= 5 || !name;

    if (hasError) setError(!name ? setupErrors.noName : setupErrors.tooManyPlayers)
    else {
      setName(value)
      socket.emit('join', { name, game }, () => {})
      return () => {
        socket.emit('disconnect')
        socket.off()
      }
    }
    setIsNameSubmitted(true);
  }

  useEffect(() => {
    const game = location.search.substring(6, 10)
    setGame(game)

    socket = io(apiUrl)
    socket.on('message', (res: { text: string }) => {
      setUserMessage(res.text)
    })
    socket.on('roomData', ({ users }: { users: tempIUsers }) => {
      setUsers(users.filter(user => user.game === game))
    })
  }, [userMessage, location]);

  return (
    <section className="Set-Player">
      <h1 className="gameid-mark">Your Game ID is: {game}</h1>
      {!isNameSubmitted && <form id={formId} onSubmit={joinUserToGame}>
        <label className="input-label" htmlFor={inputId}>Choose a Name</label>
        <input id={inputId} className="input-field" type="text" aria-describedby={error ? errorId : undefined} />
        {error && <p id={errorId} className='error-message'>{error}</p>}
        <button className="admin-button" type="submit">That's me!</button>
      </form>}
      {isNameSubmitted && <p className="user-message-txt">{userMessage}</p>}
      <PlayerList users={users} />
      {isNameSubmitted && <Link to={`/play?game=${game}&name=${name}`}>
        <button id="all-ready" className="admin-button">{users.length ? "We're" : "I'm"} ready!</button>
      </Link>}
    </section>
  )

}
