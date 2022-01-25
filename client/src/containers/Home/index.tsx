import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from 'models/routes';
import './styles.scss'
import { getRandomId } from 'helpers';

export function Home() {
  const errorId = 'gameIdError'
  const [gameId, setGameId] = useState('');
  const [hasJoinError, setHasJoinError] = useState(false);

  const onGameIdChange = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setGameId(value.toUpperCase())
    if (hasJoinError) setHasJoinError(value.length !== 4)
  }

  return (
    <main className="Home">
      <div className="intro">
        <h1 className="title">Sur<span>Viral</span></h1>
        <p className="description">
          Your university's abandoned you...<br/>
          a virus is on the loose...<br/>
          and your friends are all you have<br/><br/>
          <em>Do you have what it takes to make it out alive?</em>
        </p>
      </div>
      <div className="menu">
        <Link to={`${Routes.SETUP}?game=${getRandomId()}/host/`}>
          <button className="admin-button">New Game</button>
        </Link>
        <form>
          <input
            className="input-field"
            aria-describedby={hasJoinError ? errorId : undefined}
            type="text"
            onChange={onGameIdChange}
          />
          <Link
            onClick={() => setHasJoinError(gameId.length !== 4)}
            to={gameId.length === 4 ? `${Routes.SETUP}?game=${gameId}`: '#'}
          >
            <input className="admin-button" type="submit" value="Join Game"/>
          </Link>
        </form>
      </div>
      {hasJoinError && <p id={errorId} className="error">Please enter a valid game ID or select 'New Game'</p>}
      <Link className="about-link" to="/about">About This Project</Link>
    </main>
  )
}
