import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export const FinalScreen: FC<{ game: string, points: number }> = ({ game, points }) => {
  return (
    <section className="final-screen">
      <Link to={`/game-over?game=${game}&points=${points}`}>
        <button>Seal your fate</button>
      </Link>
    </section>
  )
}
