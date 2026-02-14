export interface OldManWord {
  word: string;
  meaning: string;
  example: string;
  category: string;
  era?: string;
}

export const categories = [
  "Insults & Complaints",
  "Daily Life",
  "People & Characters",
  "Expressions",
  "Technology Confusion",
  "Money & Work",
  "Weather & Nature",
  "Food & Drink",
] as const;

export const words: OldManWord[] = [
  // Insults & Complaints
  {
    word: "Whippersnapper",
    meaning: "A young and inexperienced person who is overconfident",
    example: "Some whippersnapper cut me off in the parking lot!",
    category: "Insults & Complaints",
    era: "1700s",
  },
  {
    word: "Nincompoop",
    meaning: "A foolish or stupid person",
    example: "That nincompoop at the bank couldn't even count my change right.",
    category: "Insults & Complaints",
    era: "1670s",
  },
  {
    word: "Rapscallion",
    meaning: "A mischievous person; a rascal",
    example: "That little rapscallion trampled my petunias again!",
    category: "Insults & Complaints",
    era: "1690s",
  },
  {
    word: "Scalawag",
    meaning: "A person who behaves badly but in an amusingly mischievous way",
    example: "Your uncle was quite the scalawag in his younger days.",
    category: "Insults & Complaints",
    era: "1840s",
  },
  {
    word: "Codger",
    meaning: "An elderly man, especially one who is old-fashioned",
    example: "I'm just an old codger who likes things the way they were.",
    category: "Insults & Complaints",
    era: "1750s",
  },
  {
    word: "Balderdash",
    meaning: "Senseless talk or writing; nonsense",
    example: "That news report was pure balderdash!",
    category: "Insults & Complaints",
    era: "1590s",
  },
  {
    word: "Fiddlesticks",
    meaning: "An exclamation of disagreement or annoyance",
    example: "Fiddlesticks! I left my reading glasses at the diner again.",
    category: "Insults & Complaints",
    era: "1600s",
  },

  // Daily Life
  {
    word: "Icebox",
    meaning: "A refrigerator",
    example: "Go check the icebox and see if we have any leftover meatloaf.",
    category: "Daily Life",
    era: "1840s",
  },
  {
    word: "Dungarees",
    meaning: "Jeans or denim overalls",
    example: "Put on your dungarees, we've got yard work to do.",
    category: "Daily Life",
    era: "1610s",
  },
  {
    word: "Davenport",
    meaning: "A large sofa, especially one that converts to a bed",
    example: "Your cousin's sleeping on the davenport tonight.",
    category: "Daily Life",
    era: "1850s",
  },
  {
    word: "Parlor",
    meaning: "A living room or sitting room",
    example: "Don't put your feet on the furniture in the parlor!",
    category: "Daily Life",
    era: "1200s",
  },
  {
    word: "Jalopy",
    meaning: "An old, beat-up car",
    example: "I drove that jalopy for 20 years and it never let me down.",
    category: "Daily Life",
    era: "1920s",
  },
  {
    word: "Britches",
    meaning: "Pants or trousers",
    example: "Pull up your britches, you look ridiculous!",
    category: "Daily Life",
    era: "1200s",
  },
  {
    word: "Pocketbook",
    meaning: "A purse or handbag",
    example: "Hand me my pocketbook, I need to find my coupons.",
    category: "Daily Life",
    era: "1610s",
  },

  // People & Characters
  {
    word: "Gadabout",
    meaning: "A person who goes from place to place seeking amusement",
    example: "She's always been a gadabout, never sitting still for a minute.",
    category: "People & Characters",
    era: "1830s",
  },
  {
    word: "Ne'er-do-well",
    meaning: "A person who is lazy and irresponsible",
    example: "That ne'er-do-well next door hasn't mowed his lawn in months.",
    category: "People & Characters",
    era: "1730s",
  },
  {
    word: "Floozy",
    meaning: "A woman of questionable morals (considered disrespectful)",
    example: "In grandpa's stories, every villain had a floozy sidekick.",
    category: "People & Characters",
    era: "1910s",
  },
  {
    word: "Sourpuss",
    meaning: "A habitually grumpy person",
    example: "Don't be such a sourpuss, it's a beautiful day!",
    category: "People & Characters",
    era: "1930s",
  },
  {
    word: "Lollygagger",
    meaning: "A person who dawdles or wastes time",
    example: "Quit being a lollygagger and help me carry these groceries!",
    category: "People & Characters",
    era: "1860s",
  },

  // Expressions
  {
    word: "Cattywampus",
    meaning: "Askew, not lined up properly",
    example: "That picture frame is all cattywampus, straighten it up!",
    category: "Expressions",
    era: "1840s",
  },
  {
    word: "Hootenanny",
    meaning: "A lively folk music party",
    example: "We used to have a hootenanny every Saturday night.",
    category: "Expressions",
    era: "1920s",
  },
  {
    word: "Kerfuffle",
    meaning: "A fuss or commotion, especially one caused by conflicting views",
    example: "There was quite a kerfuffle at the town hall meeting.",
    category: "Expressions",
    era: "1810s",
  },
  {
    word: "Rigmarole",
    meaning: "A lengthy and complicated procedure",
    example: "I had to go through the whole rigmarole just to return a shirt.",
    category: "Expressions",
    era: "1730s",
  },
  {
    word: "Doohickey",
    meaning: "A small mechanical device whose name one has forgotten",
    example: "Hand me that doohickey over there, the one with the red handle.",
    category: "Expressions",
    era: "1910s",
  },
  {
    word: "Thingamajig",
    meaning: "Something whose name one has forgotten or doesn't know",
    example: "Where's the thingamajig I use to change the channel?",
    category: "Expressions",
    era: "1820s",
  },
  {
    word: "Dagnabbit",
    meaning: "An exclamation of frustration (cleaned-up version of a swear)",
    example: "Dagnabbit! I sat on my glasses again!",
    category: "Expressions",
    era: "1830s",
  },

  // Technology Confusion
  {
    word: "The Google",
    meaning: "The internet / Google search engine",
    example: "I looked it up on The Google and it said I have 3 weeks to live.",
    category: "Technology Confusion",
    era: "2000s",
  },
  {
    word: "Talkies",
    meaning: "Movies with sound (as opposed to silent films)",
    example: "When the talkies first came out, it changed everything!",
    category: "Technology Confusion",
    era: "1910s",
  },
  {
    word: "Hi-Fi",
    meaning: "A high-fidelity stereo system",
    example: "Put on some Sinatra on the hi-fi, would ya?",
    category: "Technology Confusion",
    era: "1950s",
  },
  {
    word: "The Tube",
    meaning: "The television",
    example: "What's on the tube tonight? Anything good?",
    category: "Technology Confusion",
    era: "1950s",
  },
  {
    word: "Contraption",
    meaning: "Any mechanical device, especially a strange or complicated one",
    example: "What's this contraption? Back in my day we used a can opener.",
    category: "Technology Confusion",
    era: "1830s",
  },

  // Money & Work
  {
    word: "Two Bits",
    meaning: "A quarter (25 cents)",
    example: "A haircut used to cost two bits!",
    category: "Money & Work",
    era: "1720s",
  },
  {
    word: "Breadwinner",
    meaning: "The person who earns money for a family",
    example: "Your grandfather was the breadwinner for a family of eight.",
    category: "Money & Work",
    era: "1820s",
  },
  {
    word: "Plugged Nickel",
    meaning: "Something completely worthless",
    example: "That car isn't worth a plugged nickel!",
    category: "Money & Work",
    era: "1850s",
  },
  {
    word: "Moxie",
    meaning: "Force of character, determination, or nerve",
    example: "That kid's got real moxie, I'll give him that.",
    category: "Money & Work",
    era: "1870s",
  },
  {
    word: "Elbow Grease",
    meaning: "Hard physical work",
    example: "That floor won't clean itself — it needs some elbow grease!",
    category: "Money & Work",
    era: "1670s",
  },

  // Weather & Nature
  {
    word: "Tarnation",
    meaning: "An exclamation of surprise (euphemism for damnation)",
    example: "What in tarnation is that racket outside?",
    category: "Weather & Nature",
    era: "1780s",
  },
  {
    word: "Golly",
    meaning: "An exclamation of surprise",
    example: "Golly, would you look at the size of that storm cloud!",
    category: "Weather & Nature",
    era: "1740s",
  },
  {
    word: "Doozy",
    meaning: "Something outstanding or unique of its kind",
    example: "That blizzard of '78 was a real doozy.",
    category: "Weather & Nature",
    era: "1910s",
  },

  // Food & Drink
  {
    word: "Supper",
    meaning: "The evening meal (distinct from dinner, which is the midday meal)",
    example: "Wash up, supper's on the table in five minutes.",
    category: "Food & Drink",
    era: "1200s",
  },
  {
    word: "Vittles",
    meaning: "Food or provisions",
    example: "Let's stop here and get some vittles before we hit the road.",
    category: "Food & Drink",
    era: "1300s",
  },
  {
    word: "Sarsaparilla",
    meaning: "A sweet, root beer-like drink",
    example: "Nothing beats an ice-cold sarsaparilla on a hot day.",
    category: "Food & Drink",
    era: "1570s",
  },
  {
    word: "Hooch",
    meaning: "Cheap or illicitly produced alcohol",
    example: "Uncle Earl used to brew hooch in the barn during Prohibition.",
    category: "Food & Drink",
    era: "1890s",
  },
];

export function getRandomWord(): OldManWord {
  return words[Math.floor(Math.random() * words.length)];
}

export function getWordsByCategory(category: string): OldManWord[] {
  return words.filter((w) => w.category === category);
}
