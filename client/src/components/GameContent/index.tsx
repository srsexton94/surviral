import React, { FormEvent, MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { IChoice, slides } from 'models'
import './styles.scss'

export const GameContent = () => {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [sass, setSass] = useState('')

  function submitAnswer(event: FormEvent) {
    event.preventDefault()
    const target = event.target as HTMLFormElement;

    const { value } = target.children[0] as HTMLSelectElement
    const choice = slides[index].choices[value as unknown as number]

    getSassy(choice)

    if (index === slides.length - 1) {
      const gameContent = document.getElementById('game-content')
      if (gameContent) gameContent.style.display = 'none'
      const finalView = document.getElementById('final-view')
      if (finalView) finalView.style.display = 'block'
    } else {
      const addPoints = points + choice.point
      setPoints(addPoints)
      const incr = index + 1
      setIndex(incr)
    }
  }

  function onPlay(event: MouseEvent) {
    event.preventDefault()

    const letsPlay = document.getElementById('lets-play')
    if (letsPlay) letsPlay.style.display = 'none'
    const gameContent = document.getElementById('game-content')
    if (gameContent) gameContent.style.display = 'block'
  }

  function getSassy({ subtext, point }: IChoice) {

    switch(point) {
      case 2:
      case 3:
        setSass(`${subtext} You earn ${point} points!`)
        break;
      case 1:
        setSass(`${subtext} You earn ${point} point.`)
        break;
      case -1:
        setSass(`${subtext} You lose ${Math.abs(point)} point.`)
        break;
      case -2:
      case -3:
        setSass(`${subtext} You lose ${Math.abs(point)} points!`)
        break;
      default:
        setSass(`${subtext} You earn nothing.`)
    }
    const sassyModal = document.getElementById('sassy-modal')
    if (sassyModal) sassyModal.style.display = 'block'
  }

  function byeSass(event: MouseEvent) {
    event.preventDefault()

    const sassyModal = document.getElementById('sassy-modal')
    if (sassyModal) sassyModal.style.display = 'none'
  }

  return (
    <section className="game-content">
      <aside id="sassy-modal" onClick={byeSass}>
        <p className="sass">{sass}</p>
        <p className="glow">Click screen to close</p>
      </aside>
      <section id="lets-play">
        <p>Remember, your choices affect your whole team's outcome!<br />Are you ready?</p>
        <button onClick={onPlay}>Let's Play!</button>
      </section>
      <section id="game-content" className="card">
        <h2>{slides[index].prompt.scene}</h2>
        <p>{slides[index].prompt.question}</p>
        <ol>
          <li>{slides[index].choices[0].answer}</li>
          <li>{slides[index].choices[1].answer}</li>
          <li>{slides[index].choices[2].answer}</li>
          <li>{slides[index].choices[3].answer}</li>
          <li>{slides[index].choices[4].answer}</li>
        </ol>
        <form id="game-content-form" onSubmit={submitAnswer}>
          <select id="majors" name="majors">
            <option value={0}>A</option>
            <option value={1}>B</option>
            <option value={2}>C</option>
            <option value={3}>D</option>
            <option value={4}>E</option>
          </select>
          <input type="submit"></input>
        </form>
      </section>
      <section id="final-view">
        <Link to={`/game-over?game=QWER&points=${points}`}>
          <button>Seal your fate</button>
        </Link>
      </section>
    </section>
  )
}
