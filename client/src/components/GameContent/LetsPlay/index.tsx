import React, { FC } from 'react'
import './styles.scss'

export const LetsPlay: FC<{ onClickPlay: () => void }> = ({ onClickPlay }) => {
  return (
    <section id="lets-play">
      <p>Remember, your choices affect your whole team's outcome!</p>
      <p>Are you ready?</p>
      <button onClick={onClickPlay}>Let's Play!</button>
    </section>
  )
}
