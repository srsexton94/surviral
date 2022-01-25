import React, { FC, useState } from 'react';
import { tempIUsers } from 'models';
import './styles.scss';

export const TeamLog: FC<{ users: tempIUsers }> = ({ users }) => {
  const [isLogOpen, setIsLogOpen] = useState(false)

  return (
    <section className="team-log">
      <button className="toggle-button" onClick={() => setIsLogOpen(!isLogOpen)}>
        Team Log
      </button>
      <ul>
        {users.length > 0 && users.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
