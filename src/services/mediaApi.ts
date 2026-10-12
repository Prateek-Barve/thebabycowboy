
const API_BASE_URL = (
  import.meta.env.VITE_MEDIA_API_BASE_URL as string | undefined
)?.replace(/\/+$/, "");

export interface MediaGenre {
  id: string;
  name: string;
  slug: string;
}

export interface MediaItemResponse {
  id: string;
  title: string;
  category: "Book" | "Movie" | "Series" | "Playlist";
  status: "Reading" | "Read" | "Watched" | "Watching" | "Curated";
  description: string | null;
  coverImageUrl: string | null;
  displayOrder: number;
  genres: MediaGenre[];

  bookDetails: {
    author: string;
  } | null;

  movieDetails: {
    director: string | null;
    releaseYear: number | null;
  } | null;

  seriesDetails: {
    creator: string | null;
    seasonCount: number | null;
    episodeCount: number | null;
  } | null;

  playlistDetails: {
    spotifyPlaylistId: string;
    platform: string;
  } | null;
}

export interface PagedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

async function request<T>(path: string): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error(
      "Media API URL is missing. Configure VITE_MEDIA_API_BASE_URL in .env.local."
    );
  }

  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(
      `Media API request failed (${response.status}).`
    );
  }

  return response.json() as Promise<T>;
}

export async function getMediaItems(): Promise<MediaItemResponse[]> {
  const pageSize = 100;
  let page = 1;
  let totalPages = 1;
  const allItems: MediaItemResponse[] = [];

  do {
    const result = await request<PagedResponse<MediaItemResponse>>(
      `/api/media?page=${page}&pageSize=${pageSize}`
    );

    allItems.push(...result.items);
    totalPages = result.totalPages;
    page += 1;
  } while (page <= totalPages);

  return allItems;
}
