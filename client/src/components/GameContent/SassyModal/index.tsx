import React, { FC } from 'react'
import './styles.scss'

export const SassyModal: FC<{ message: string, onCloseModal: () => void }> = ({ message, onCloseModal }) => {
  return (
    <div className="sassy-modal">
      {message.split('. ').map(fragment => (
        <p>{fragment}</p>
      ))}
      <button onClick={onCloseModal}>Close</button>
    </div>
  )
}
