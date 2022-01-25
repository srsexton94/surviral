import React, { ChangeEvent, FC } from "react";

import { snakeToSentenceCase } from "helpers";
import { Majors } from "models";
import "./styles.scss";

interface MajorChoiceProps { onMajorChange: (event: ChangeEvent<Element>) => void, onSubmit: () => void }

export const MajorChoice: FC<MajorChoiceProps> = ({ onMajorChange, onSubmit }) => {
  return (
    <form className="major-choice" onSubmit={onSubmit}>
      <h1>Welp. Not the semester you imagined... but you still gotta study.</h1>
      <label htmlFor="majors">What's your major?</label>
      <select id="majors" name="majors" onChange={onMajorChange}>
        {Majors &&
          Object.values(Majors).map((character, i) => (
            <option key={i} value={character}>
              {snakeToSentenceCase(character)}
            </option>
          ))}
      </select>
      <input type="submit"></input>
    </form>
  );
};
