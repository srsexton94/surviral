export interface ILink {
  category: AboutLinks,
  text?: string,
  url: string,
}

export enum AboutLinks {
  CODE = "codeSources",
  CONTRIBUTE = "contributors",
  HACKATHON = "hackathon",
  MINTBEAN = "mintbean",
}

export const aboutLinks: ILink[] = [
  {
    category: AboutLinks.CODE,
    text: 'Client Repo',
    url: 'https://github.com/connietran-dev/janebox-surviral-client'
  },
  {
    category: AboutLinks.CODE,
    text: 'Server Repo',
    url: 'https://github.com/connietran-dev/janebox-surviral-server'
  },
  {
    category: AboutLinks.CONTRIBUTE,
    text: 'Sam Sexton',
    url: 'https://www.linkedin.com/in/samantha-sexton/'
  },
  {
    category: AboutLinks.CONTRIBUTE,
    text: 'Connie Tran',
    url: 'https://www.linkedin.com/in/connietran1/'
  },
  {
    category: AboutLinks.HACKATHON,
    text: 'a weekend hackathon',
    url: 'https://sites.google.com/mintbean.io/2020-07-10-multiplayer-hackath/home?authuser=2'
  },
  {
    category: AboutLinks.MINTBEAN,
    url: 'https://www.mintbean.io/'
  }
]
