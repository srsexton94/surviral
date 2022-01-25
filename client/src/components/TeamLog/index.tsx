import React, { FC, useState } from 'react';

import controller from 'assets/images/controller.png'
import { IUser } from 'models';
import './styles.scss';

export const TeamLog: FC<{ users: IUser[] }> = ({ users }) => {
  const [isLogOpen, setIsLogOpen] = useState(false)

  return (
    <section className="team-log">
      <button className="toggle-button" onClick={() => setIsLogOpen(!isLogOpen)}>
        Team Log
      </button>
      {isLogOpen && 
        <ul className="team-list">
          {users.length > 0 && users.map(({ major, name, points }) => (
            <li key={name}>
              <div className="team-member">
                <img src={controller} alt="" aria-hidden />
                <p>{name}<span>({major || 'Chemist'})</span></p>
              </div>
              <p className="points">{ points || 0 }</p>
            </li>
          ))}
        </ul>
      }
    </section>
  )
}
