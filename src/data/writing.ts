
export interface WritingItem {
  id: string;
  title: string;
  description: string;
  publication: string;
  publishedAt?: string;
  url: string;
}

export const writingItems: WritingItem[] = [
  // Add your published articles here.
  // Example:
  // {
  //   id: "learning-to-slow-down",
  //   title: "Learning to Slow Down",
  //   description: "A few thoughts on slowing down and being present.",
  //   publication: "Medium",
  //   publishedAt: "Oct 2026",
  //   url: "https://medium.com/@yourusername/your-article",
  // },
];
