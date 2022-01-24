export enum Characters {
  ENGINEER = 'engineering',
  CHEMIST = 'chemistry',
  POLISCI = 'political-science',
  BUSINESS = 'business',
  PHOTOGRAPHER = 'photography'
}

export interface ICharacterDetails { title: string, description: string };

export const characterDetails: { [key in Characters]: ICharacterDetails } = {
  [Characters.ENGINEER]: {
    title: 'The Engineer',
    description: 'You’ll be responsible for rebuilding a whole new world… Sounds like a lot of work.'
  },
  [Characters.CHEMIST]: {
    title: 'The Chemist',
    description: 'Found a vaccine yet? No? Well that baking soda and vinegar volcano is pretty cool too.'
  },
  [Characters.POLISCI]: {
    title: 'The PoliSci Pal',
    description: 'Down with the government! Anarchy!'
  },
  [Characters.BUSINESS]: {
    title: 'Business Tycoon',
    description: 'Could capitalism be to blame for all of this death and despair…? Nah, it’s Millennials’ fault.'
  },
  [Characters.PHOTOGRAPHER]: {
    title: 'The Photographer',
    description: 'At least when the world burns, you won’t have to figure out how to pay back all that college debt.'
  },
}
