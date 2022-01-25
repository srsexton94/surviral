import React, { FC, useState } from 'react'

import { writeModalSass } from 'helpers'
import { IChoice, slides } from 'models'
import { SassyModal } from './SassyModal'
import { LetsPlay } from './LetsPlay'
import { FinalScreen } from './FinalScreen'
import './styles.scss'
import { GameSlides } from './GameSlides'

const emptySass = { message: '', isOpen: false }

export const GameContent: FC<{ game: string }> = ({ game }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [sass, setSass] = useState(emptySass)
  const [choice, setChoice] = useState(slides[slideIndex].choices[0])
  const [isReadyToPlay, setIsReadyToPlay] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  function handleChoice(value: string) {
    console.log({ [value]: slides[slideIndex].choices[parseInt(value)] })
    setChoice(slides[slideIndex].choices[parseInt(value)])
  }

  function submitAnswer() {
    console.log({ choice })
    getSassy(choice)
    setPoints(points + choice.point)
    setSlideIndex(slideIndex + 1)
    setIsGameComplete(slideIndex === slides.length - 1)
  }

  function getSassy({ subtext, point }: IChoice) {
    setSass({ message: writeModalSass(subtext, point), isOpen: !sass.isOpen })
  }
  
  return (
    <section className="game-content">
      {sass.isOpen && <SassyModal message={sass.message} onCloseModal={() => setSass(emptySass)} />}
      {!isGameComplete && (isReadyToPlay 
        ? <GameSlides index={slideIndex} onChoice={handleChoice} onAnswer={submitAnswer} />
        : <LetsPlay onClickPlay={() => setIsReadyToPlay(true)} />
      )}
      {isGameComplete && <FinalScreen game={game} points={points} />}
    </section>
  )
}
