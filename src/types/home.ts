export type ThoughtPhase =
  | "reflection"
  | "generating"
  | "response";

export interface Thought {
  id: string;
  text: string;
  author?: string;
}