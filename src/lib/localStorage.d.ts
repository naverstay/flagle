export type Stats = {
  gamesPlayed: number;
  gamesWon: number;
  lastWin: string;
  currentStreak: number;
  maxStreak: number;
  usedGuesses: number[];
  emojiGuesses: string;
};

export type Guesses = {
  day: string;
  flipped: boolean[][];
  countries: string[];
}
