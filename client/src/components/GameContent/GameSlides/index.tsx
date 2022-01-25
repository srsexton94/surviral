import React, { FC } from 'react'
import { slides } from 'models'
import './styles.scss'

interface GameSlidesProps { index: number, onChoice: (value: string) => void, onAnswer: () => void }

export const GameSlides: FC<GameSlidesProps> = ({ index, onChoice, onAnswer }) => {
  const { choices, prompt } = slides[index];
  
  return (
    <section className="game-slides">
      <h2>{prompt.scene}</h2>
      <p>{prompt.question}</p>
      <ol className="list">
        {choices.map(({ answer }, i) => <li key={i}>{answer}</li>)}
      </ol>
      <form onSubmit={onAnswer}>
        <select onChange={({ target }) => onChoice(target.value)}>
          {choices.map((_choice, i) => (
            <option value={i}>{['A', 'B', 'C', 'D', 'E'][i]}</option>
          ))}
        </select>
        <input type="submit"></input>
      </form>
    </section>
  )
}
