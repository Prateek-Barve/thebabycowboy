export interface Thought {
  id: number;
  text: string;
  author?: string;
}

export const thoughts: Thought[] = [
  {
    id: 1,
    text: "What would you do if you knew you could not fail?",
  },
  {
    id: 2,
    text: "What is something you would learn if nobody could see you fail?",
  },
  {
    id: 3,
    text: "If you could keep only one memory, which one would you keep?",
  },
  {
    id: 4,
    text: "What does success actually mean to you?",
  },
  {
    id: 5,
    text: "When was the last time you changed your mind about something important?",
  },
  {
    id: 6,
    text: "What would you do differently if you stopped worrying about being judged?",
  },
];