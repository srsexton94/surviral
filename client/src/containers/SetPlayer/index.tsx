import React, { FC, useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import apiUrl from 'apiConfig';
import { PlayerList } from 'components';
import { ISocket, IUser } from 'models';
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
  const [users, setUsers] = useState([] as IUser[])
  const [userMessage, setUserMessage] = useState('')
  const [error, setError] = useState('')
  const [isUserSubmitted, setIsUserSubmitted] = useState(false)

  function joinUserToGame() {
    const newUser = { name, game }
    setError('')
    setUsers([...users, newUser])
    setIsUserSubmitted(true)

    socket.emit('join', newUser, () => {})
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }

  function handleNameSubmit(event: FormEvent) {
    event.preventDefault()
    const [tooManyPlayers, invalidName] = [users?.length === 5, !name || name.length < 2]

    if (tooManyPlayers || invalidName) {
      setError(invalidName ? setupErrors.noName : setupErrors.tooManyPlayers)
    } else {
      return joinUserToGame()
    }
  }

  useEffect(() => {
    const game = location.search.substring(6, 10)
    setGame(game)

    socket = io(apiUrl)
    socket.on('message', (res: { text: string }) => {
      setUserMessage(res.text)
    })
    socket.on('roomData', ({ users }: { users: IUser[] }) => {
      setUsers(users.filter(user => user.game === game))
    })
  }, [userMessage, location]);

  return (
    <section className="Set-Player">
      <h1 className="gameid-mark">Your Game ID is: {game}</h1>
      {!isUserSubmitted && 
        <form id={formId} onSubmit={handleNameSubmit}>
          <label className="input-label" htmlFor={inputId}>Choose a Name</label>
          <input 
            id={inputId} 
            className="input-field" 
            type="text" 
            aria-describedby={error ? errorId : undefined} 
            onChange={({ target }) => setName(target.value)}
          />
          {error && <p id={errorId} className='error-message'>{error}</p>}
          <button className="admin-button" type="submit">That's me!</button>
        </form>
      }
      <PlayerList users={users} />
      {isUserSubmitted && <Link to={`/play?game=${game}&name=${name}`}>
        <button id="all-ready" className="admin-button">{users.length > 1 ? "We're" : "I'm"} ready!</button>
      </Link>}
    </section>
  )

}
