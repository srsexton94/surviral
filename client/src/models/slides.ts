export interface IChoice {
  answer: string,
  subtext: string,
  point: number,
}

interface ISlide {
  prompt: {
    scene: string,
    question: string,
  },
  choices: IChoice[]
}

export const slides: ISlide[] = [
  {
    prompt: {
      scene: "The 7/11",
      question: "It’s the closest thing to a grocery store on campus, and it’ll have to do. What do you scrounge up?"
    },
    choices: [
      {
        answer: "A 128-ounce big gulp",
        subtext: "How did you drink the whole thing? It’s practically big enough to bathe a baby in that cup… Oh no. You’re going to have to use the 7/11 bathroom. That’s not a good idea, even when there isn’t a global pandemic!",
        point: -1
      },
      {
        answer: "Hand Sanitizer",
        subtext: "You reach to the back of a shelf behind a pile of mini-frosted flakes boxes and find the last hand sanitizer in the store!",
        point: 2
      },
      {
        answer: "Five hour energy",
        subtext: "You’re taking first watch tonight.",
        point: 1
      },
      {
        answer: "Water",
        subtext: "You're a pro! I can tell you're the smart one of the group. They voted you Most Likely to Survive the Apocalypse, huh?",
        point: 2
      },
      {
        answer: "Taquitos from the hot rollers",
        subtext: "You have died of dysentery. Just kidding, but you’re really not feeling good after eating that.",
        point: -2
      }
    ]
  },
  {
    prompt: {
      scene: "On the street",
      question: "You’d better hurry back to the dorm, things are getting pretty hairy out there. How far away do you stay away from other people on the sidewalk?"
    },
    choices: [
      {
          answer: "2 feet",
          subtext: "As a rule of thumb, rattlesnakes can, at best, strike a distance of two-thirds their total body length. For example, a three foot long snake may be able to strike a distance of two feet. If anyone of these passerby has a rattlesnake in their bag you’re in trouble… Also, you might catch the virus.",
          point: -2
      },
      {
          answer: "6 feet",
          subtext: "Good job! You’re showing respect for your fellow human beings and also protecting yourself from inhaling their disgusting respiratory droplets.",
          point: 2
      },
      {
          answer: "Inside",
          subtext: "...I'm staying inside - away from people. That's what we're actually supposed to be doing!",
          point: 2
      },
      {
          answer: "20 feet",
          subtext: "While walking in the middle of the road in order to stay 20 feet away from people passing you on the sidewalk, you nearly get hit by a truck.",
          point: -1
      },
      {
          answer: "6 feet",
          subtext: "But you take off your mask, because it's harshing your style.",
          point: -1
      }
    ]
  },
  {
    prompt: {
      scene: "Back at the dorm",
      question: "You made it home in one piece, more or less! Now… if only you could remember the safest way to take off your mask, gloves, or any other PPE you happen to be wearing…"
    },
    choices: [
      {
          answer: "Use your gloves to take off all of your other PPE and exterior clothing and leave it in a pile by the door.",
          subtext: "No! If you’re wearing gloves, taking those off should be the first step. Wash your hands or remove your gloves before getting everything else all germy. Here are some resources for proper removal of PPE: https://www.cdc.gov/hai/pdfs/ppe/ppe-sequence.pdf and a study on how to best re-use masks: https://www.webmd.com/lung/news/20200416/how-to-sanitize-n95-masks-for-reuse-nih-study#1",
          point: -1
      },
      {
          answer: "Wash Hands/Remove Gloves, Remove goggles or face shield by lifting the back band, Remove mask or respirator touching only the rear ties or elastic.",
          subtext: "Correct! Wash your hands if you touch any potentially contaminated surface, and sanitize the surfaces of reusable PPE. Here are some resources for proper removal of PPE: https://www.cdc.gov/hai/pdfs/ppe/ppe-sequence.pdf and a study on how to best re-use masks: https://www.webmd.com/lung/news/20200416/how-to-sanitize-n95-masks-for-reuse-nih-study#1",
          point: 2
      },
      {
          answer: "Mask, what mask?",
          subtext: "Masks help keep you and everyone around you safe. Start with wearing one whenever you’re around others. Even if you’re not concerned about your own health, be a good community member. Here are some resources for proper removal of PPE: https://www.cdc.gov/hai/pdfs/ppe/ppe-sequence.pdf and a study on how to best re-use masks: https://www.webmd.com/lung/news/20200416/how-to-sanitize-n95-masks-for-reuse-nih-study#1",
          point: -3
      },
      {
          answer: "Carefully untie your mask touching the loops only, fold the outside corners together without touching your face, wash your hands, and wash your cloth face mask",
          subtext: "Correct! Wash your hands if you touch any potentially contaminated surface, and sanitize the surfaces of reusable PPE. Here are some resources for proper removal of PPE: https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html",
          point: 2
      },
      {
          answer: "Wash your hands with warm water and soap for at least 20 seconds when you return home and again after you put away your groceries.",
          subtext: "There is no evidence of food packaging being associated with the transmission of COVID-19. However, if you wish, you can wipe down product packaging and allow it to air dry, as an extra precaution. Here are some resources for proper removal of PPE: https://www.fda.gov/food/food-safety-during-emergencies/shopping-food-during-covid-19-pandemic-information-consumers",
          point: 2
      }
    ]
  },
  {
    prompt: {
      scene: "Shopping for groceries",
      question: "Since apparently you ate all the snacks you bought at 7/11 within five minutes of getting back to the dorm, it’s probably a good idea to get some groceries."
    },
    choices: [
      {
          answer: "Suit up in your PPE, prepare the credit card, and buy 8-12 months of supplies in one go! We’ll never run out of toilet paper in this house.",
          subtext: "Making a castle from your toilet paper and canned beans might be fun at first, but hoarding during an emergency puts undue strain on the system, contributing to unnecessary shortages and general panic. Get your supplies as-needed and consider your community.",
          point: -1
      },
      {
          answer: "Prepare a list of 1-2 weeks of supplies, put on that mask, and go to the store! Maintain social distancing in the store, wipe down surfaces you have to touch, and wash groceries before putting them away.",
          subtext: "It’s almost like you have the CDC website open right now… but I’ll allow it.",
          point: 2
      },
      {
          answer: "Buy up all the toilet paper and hand sanitizer to barter for fuel, ammunition, and mercenaries in the dark dieselpunk future.",
          subtext: "Mediocre! Society hasn’t crumbled yet, and acting like it has is only going to prolong this problem. You want to wear your Mad Max costume to comic con next year, don’t you?",
          point: -2
      },
      {
          answer: "Order grocery delivery for contactless delivery and sanitize the packaging when it arrives.",
          subtext: "If this option is available to you, it’s a low-risk one! Be sure to clean packaging and avoid exposing the delivery driver. It’s bad for everyone if they have to interact with every dropoff! Also, tip well.",
          point: 1
      },
      {
          answer: "Go to the grocery store everyday, because you're bored.",
          subtext: "We get it. Trust us, we're all bored. But don't make going to the grocery store an excuse to get out of the house. The outdoors didn't go away. Get outside!",
          point: -1
      }
    ]
  }
]
