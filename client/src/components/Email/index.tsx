import React, { FC } from 'react'
import emailGraphic from 'assets/images/email-graphic.png'

import './styles.scss'

export const Email: FC<{onClose: () => void}> = ({ onClose }) => {  
  return (
    <section className="email-container">
      <div className="email">
        <h2 className="title">Upcoming Changes: Recommendations for Pandemic Survival</h2>
        <div className="header">
          <p>Office of the President &lt;usmail@usuniv.edu&gt;</p>
          <p>Tue 01/23/2020 5:00 PM</p>
          <p>To: QUERYMAIL-L@LISTS.USUNIV.EDU</p>
        </div>
        <div className="body">
          <img src={emailGraphic} alt="" aria-hidden />
          <p>Dear Students and Colleagues,</p>
          <p>
            In light of the recent pandemic, we will be suspending classes and all university services,
            leaving you all to fend for yourselves in this new, terrifying reality.
          </p>
          <p>
            Form a clan with the other students in your dorm hall in order to compete for resources and
            survive! You will face a series of scenarios, and your collective decisions will contribute
            to your overall survival score, tallied at the end of the game.
          </p>
          <p>
            It's been a pleasure creating a learning community with all of you during my time as President
            of this institution, and I look forward to building a new world again from the ashes of the old.
          </p>
          <p>
            Sincerely,<br/>
            Jim Dunkelberger, PhD
          </p>
          <p>
            Former President of U.S. University<br/>
            God Emperor of University City
          </p>
        </div>
        <div className="options-set">
          <button aria-hidden disabled>Reply</button>
          <button aria-hidden disabled>Reply All</button>
          <button aria-hidden disabled>Forward</button>
          <button aria-label="Close Email" onClick={onClose}>
            FREAK OUT
          </button>
        </div>
      </div>
    </section>
  )
}
