
export type ShelfCategory = "Book" | "Movie" | "Series" | "Playlist";

export type ShelfStatus =
  | "Currently Reading"
  | "Read"
  | "Watched"
  | "Watching"
  | "Completed"
  | "Curated";

export interface ShelfItem {
  id: string;
  title: string;
  category: ShelfCategory;
  status: ShelfStatus;
  creator: string;
  year?: number;
  description: string;
  coverClass: string;
  featured?: boolean;
  spotifyPlaylistId?: string;
}

export const shelfItems: ShelfItem[] = [
  // BOOKS
  {
    id: "book-1",
    title: "Atomic Habits",
    category: "Book",
    status: "Currently Reading",
    creator: "James Clear",
    year: 2018,
    description:
      "Small changes, lasting systems, and the art of getting a little better every day.",
    coverClass: "atomic-habits",
    featured: true,
  },
  {
    id: "book-2",
    title: "The Alchemist",
    category: "Book",
    status: "Read",
    creator: "Paulo Coelho",
    year: 1988,
    description:
      "A journey about following a dream and learning to notice what the journey teaches.",
    coverClass: "the-alchemist",
  },
  {
    id: "book-3",
    title: "Meditations",
    category: "Book",
    status: "Read",
    creator: "Marcus Aurelius",
    description:
      "Private reflections on character, perspective, and living with intention.",
    coverClass: "meditations",
  },

  // MOVIES
  {
    id: "movie-1",
    title: "Interstellar",
    category: "Movie",
    status: "Watched",
    creator: "Christopher Nolan",
    year: 2014,
    description:
      "A journey through space, time, sacrifice, and the ties that hold people together.",
    coverClass: "interstellar",
    featured: true,
  },
  {
    id: "movie-2",
    title: "The Secret Life of Walter Mitty",
    category: "Movie",
    status: "Watched",
    creator: "Ben Stiller",
    year: 2013,
    description:
      "An ordinary life opens up when imagination gives way to adventure.",
    coverClass: "walter-mitty",
  },
  {
    id: "movie-3",
    title: "Good Will Hunting",
    category: "Movie",
    status: "Watched",
    creator: "Gus Van Sant",
    year: 1997,
    description:
      "A story about potential, vulnerability, friendship, and choosing your own path.",
    coverClass: "good-will-hunting",
  },

  // SERIES
  {
    id: "series-1",
    title: "Breaking Bad",
    category: "Series",
    status: "Watching",
    creator: "Vince Gilligan",
    year: 2008,
    description:
      "A tense character study about choices, ambition, and consequences.",
    coverClass: "breaking-bad",
    featured: true,
  },
  {
    id: "series-2",
    title: "The Office",
    category: "Series",
    status: "Completed",
    creator: "Greg Daniels",
    year: 2005,
    description:
      "Everyday workplace absurdity, awkward moments, and unexpectedly warm friendships.",
    coverClass: "the-office",
  },
  {
    id: "series-3",
    title: "Sherlock",
    category: "Series",
    status: "Completed",
    creator: "Mark Gatiss & Steven Moffat",
    year: 2010,
    description:
      "A modern detective story full of intricate mysteries and sharp deductions.",
    coverClass: "sherlock",
  },
  {
    id: "playlist-1",
    title: "Lofi Sleep",
    category: "Playlist",
    status: "Curated",
    creator: "Spotify",
    description: "Lofi sleep and chills to help you relax and unwind.",
    coverClass: "shelf-cover--playlist",
    spotifyPlaylistId: "37i9dQZF1DX2PQDq3PdrHQ",
  },
  {
    id: "playlist-2",
    title: "2000's Pop Hits",
    category: "Playlist",
    status: "Curated",
    creator: "Spotify",
    description: "Popular hits from the 2000s to get you dancing.",
    coverClass: "shelf-cover--playlist",
    spotifyPlaylistId: "4OCgVSzsFytJMLkGkQJeA0",
  },
];