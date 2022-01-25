import * as humans from "assets/images/humans";

export enum Majors {
  ENGINEERING = "engineering",
  CHEMISTRY = "chemistry",
  POLISCI = "political-science",
  BUSINESS = "business",
  PHOTOGRAPHY = "photography",
}

export interface ICharacterDetails {
  title: string;
  description: string;
  image: string;
}

export const characterDetails: { [key in Majors]: ICharacterDetails } = {
  [Majors.ENGINEERING]: {
    title: "The Engineer",
    description:
      "You’ll be responsible for rebuilding a whole new world… Sounds like a lot of work.",
    image: humans.engineer,
  },
  [Majors.CHEMISTRY]: {
    title: "The Chemist",
    description:
      "Found a vaccine yet? No? Well that baking soda and vinegar volcano is pretty cool too.",
    image: humans.chemist,
  },
  [Majors.POLISCI]: {
    title: "The PoliSci Pal",
    description: "Down with the government! Anarchy!",
    image: humans.polisci,
  },
  [Majors.BUSINESS]: {
    title: "Business Tycoon",
    description:
      "Could capitalism be to blame for all of this death and despair…? Nah, it’s Millennials’ fault.",
    image: humans.business,
  },
  [Majors.PHOTOGRAPHY]: {
    title: "The Photographer",
    description:
      "At least when the world burns, you won’t have to figure out how to pay back all that college debt.",
    image: humans.photographer,
  },
};
