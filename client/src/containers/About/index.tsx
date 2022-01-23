import React from 'react';
import { Link } from 'react-router-dom';

import { aboutLinks, AboutLinks } from 'models';
import { camelToSentenceCase } from 'helpers';
import './styles.scss';
import { Routes } from 'models/routes';

export function About() {
  const mintbeanLink = aboutLinks.find(link => link.category === AboutLinks.MINTBEAN)?.url

  const renderLinkList = (category: AboutLinks) => {
    const linkList = aboutLinks.filter(link => link.category === category)
    return (
      <div className="project-links">
        <h2>{ camelToSentenceCase(category) }:</h2>
        <ul className="link-list">{ linkList.map(({ url, text }, i) => (
          <li key={i}>
            <a className="link" href={ url } rel="noreferrer noopener" target="_blank">
              { text }
            </a>
          </li>
        ))}</ul>
      </div>
    )
  }

  return (
    <main className="About">
      <section>
        <h1 className="title">About this Project</h1>
        <p className="description">
          This project is a multiplayer, storyline game that asks players to work together and defeat a viral
          (totally-not-the-coronavirus) enemy and save the world!  The project utilizes React and Socket.IO, 
          alongside React Router, Sass, and Express.
        </p>
      </section>
      <section>
        { renderLinkList(AboutLinks.CODE) }
        { renderLinkList(AboutLinks.CONTRIBUTE) }
        <p className="description">
          This project was originally built in a weekend hackathon hosted by  
          {mintbeanLink && 
            <a className="mintbean" href={mintbeanLink} rel="noreferrer noopener" target="_blank">
              Mint<span>bean</span>
            </a>
          }
        </p>
        <Link className="home-link" to={Routes.HOME}>Go Home</Link>
      </section>
    </main>
  )
}
