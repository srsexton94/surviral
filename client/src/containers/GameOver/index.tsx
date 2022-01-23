import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export const GameOver: FC<{ location: Location }> = ({ location }) => {
  const points = parseInt(location.search.substring(18))

  const msg = (points: number): string => {
    return points >= 5 ? 'Congrats! You won!' : "Dang... You lost :'("
  }

  return (
    <section className="Game-Over">
      <h1>G a m e - O v e r</h1>
      <p className="end-msg">{msg(points)}</p>
      <Link to="/">
        <button className="admin-button">Play again!</button>
      </Link>
    </section>
  )
}
