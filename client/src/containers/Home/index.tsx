import { Routes } from 'models/routes'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export function Home() {
  const [gameId, setGameId] = useState('')

  useEffect(() => {
    const randomizedID = Math.random().toString(36).substring(2, 6).toUpperCase()
    setGameId(randomizedID)
  }, [])

  return (
    <main className="Home">
      <div className="intro">
        <h1 className="title">Sur<span>Viral</span></h1>
        <p className="description">
          Your university's abandoned you..<br/>
          a virus is on the loose..<br/>
          and your friends are all you have<br/><br/>
          <em>Do you have what it takes to make it out alive?</em>
        </p>
      </div>
      <div className="menu">
        <Link className="menu-opt" to={`${Routes.SETUP}?game=${gameId}/host/`}>
          <button className="admin-button">New Game</button>
        </Link>
        <form className="menu-opt">
          <input
            className="input-field"
            type="text"
            onChange={(event) => setGameId(event.target.value)}
          />
          <Link
            onClick={event => (!gameId) ? event.preventDefault() : null}
            to={`${Routes.SETUP}?game=${gameId}`}
          >
            <input className="admin-button" type="submit" value="Join Game"/>
          </Link>
        </form>
      </div>
      <Link className="about-link" to="/about">About This Project</Link>
    </main>
  )
}
