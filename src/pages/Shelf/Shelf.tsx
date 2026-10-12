// // import { useMemo, useState } from "react";
// // import { shelfItems, type ShelfCategory } from "../../data/shelf";
// // import "./Shelf.css";

// // type Filter = "Everything" | ShelfCategory;

// // const filters: Filter[] = ["Everything", "Book", "Movie", "Series"];

// // const categoryLabels: Record<Filter, string> = {
// //   Everything: "Everything",
// //   Book: "Books",
// //   Movie: "Movies",
// //   Series: "Series",
// // };

// // const Shelf = () => {
// //   const [activeFilter, setActiveFilter] = useState<Filter>("Everything");

// //   const filteredItems = useMemo(() => {
// //     if (activeFilter === "Everything") {
// //       return shelfItems;
// //     }

// //     return shelfItems.filter((item) => item.category === activeFilter);
// //   }, [activeFilter]);

// //   const currentItems = shelfItems.filter(
// //     (item) =>
// //       item.status === "Currently Reading" ||
// //       item.status === "Watching",
// //   );

// //   const counts = {
// //     Book: shelfItems.filter((item) => item.category === "Book").length,
// //     Movie: shelfItems.filter((item) => item.category === "Movie").length,
// //     Series: shelfItems.filter((item) => item.category === "Series").length,
// //   };

// //   return (
// //     <div className="shelf-page">
// //       <header className="shelf-hero">
// //         <p className="shelf-eyebrow">
// //           BOOKS, FILMS & STORIES THAT STAY
// //         </p>

// //         <h1 className="shelf-hero__title">
// //           The Shelf<span>.</span>
// //         </h1>

// //         <p className="shelf-hero__intro">
// //           A little corner for the stories I read, the worlds I watch,
// //           and the things that stay with me long after the credits roll.
// //         </p>

// //         <div className="shelf-hero__meta">
// //           <span>{counts.Book} BOOKS</span>
// //           <span>{counts.Movie} MOVIES</span>
// //           <span>{counts.Series} SERIES</span>
// //         </div>
// //       </header>

// //       <section className="shelf-current">
// //         <div className="shelf-section-heading">
// //           <div>
// //             <p className="shelf-eyebrow">THE CURRENT ROTATION</p>
// //             <h2>Into these lately.</h2>
// //           </div>

// //           <span className="shelf-section-note">
// //             WHAT I'M READING & WATCHING
// //           </span>
// //         </div>

// //         <div className="shelf-current__grid">
// //           {currentItems.map((item) => (
// //             <article className="shelf-current-card" key={item.id}>
// //               <div
// //                 className={`shelf-cover shelf-cover--${item.coverClass}`}
// //                 aria-label={`Decorative cover for ${item.title}`}
// //                 role="img"
// //               >
// //                 <span className="shelf-cover__category">
// //                   {item.category}
// //                 </span>
// //                 <span className="shelf-cover__title">
// //                   {item.title}
// //                 </span>
// //                 <span className="shelf-cover__creator">
// //                   {item.creator}
// //                 </span>
// //               </div>

// //               <div className="shelf-current-card__info">
// //                 <span className="shelf-status shelf-status--current">
// //                   {item.status}
// //                 </span>

// //                 <h3>{item.title}</h3>

// //                 <p>{item.description}</p>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </section>

// //       <section className="shelf-collection">
// //         <div className="shelf-section-heading">
// //           <div>
// //             <p className="shelf-eyebrow">THE PERSONAL ARCHIVE</p>
// //             <h2>A collection of stories.</h2>
// //           </div>

// //           <span className="shelf-section-note">
// //             {filteredItems.length} ITEMS
// //           </span>
// //         </div>

// //         <div
// //           className="shelf-filters"
// //           role="group"
// //           aria-label="Filter collection by category"
// //         >
// //           {filters.map((filter) => (
// //             <button
// //               key={filter}
// //               type="button"
// //               className={`shelf-filter ${
// //                 activeFilter === filter ? "is-active" : ""
// //               }`}
// //               onClick={() => setActiveFilter(filter)}
// //               aria-pressed={activeFilter === filter}
// //             >
// //               {categoryLabels[filter]}
// //             </button>
// //           ))}
// //         </div>

// //         {filteredItems.length > 0 ? (
// //           <div className="shelf-grid">
// //             {filteredItems.map((item) => (
// //               <article className="shelf-card" key={item.id}>
// //                 <div
// //                   className={`shelf-cover shelf-cover--${item.coverClass}`}
// //                   role="img"
// //                   aria-label={`Decorative cover for ${item.title}`}
// //                 >
// //                   <span className="shelf-cover__category">
// //                     {item.category}
// //                     {item.year ? ` · ${item.year}` : ""}
// //                   </span>

// //                   <span className="shelf-cover__title">
// //                     {item.title}
// //                   </span>

// //                   <span className="shelf-cover__creator">
// //                     {item.creator}
// //                   </span>
// //                 </div>

// //                 <div className="shelf-card__body">
// //                   <div className="shelf-card__meta">
// //                     <span className="shelf-card__category">
// //                       {item.category}
// //                     </span>

// //                     <span
// //                       className={`shelf-status ${
// //                         item.status === "Currently Reading" ||
// //                         item.status === "Watching"
// //                           ? "shelf-status--current"
// //                           : ""
// //                       }`}
// //                     >
// //                       {item.status}
// //                     </span>
// //                   </div>

// //                   <h3>{item.title}</h3>

// //                   <p className="shelf-card__creator">
// //                     {item.creator}
// //                   </p>

// //                   <p className="shelf-card__description">
// //                     {item.description}
// //                   </p>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         ) : (
// //           <p className="shelf-empty">
// //             Nothing on this shelf just yet.
// //           </p>
// //         )}
// //       </section>

// //       <footer className="shelf-note">
// //         <p className="shelf-eyebrow">A PERSONAL COLLECTION</p>

// //         <h2>
// //           Some stories end.
// //           <br />
// //           Some stay with you.
// //         </h2>

// //         <p>
// //           This collection will grow as I find new stories, revisit old
// //           favourites, and discover things worth remembering.
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Shelf;

// import { useMemo, useState } from "react";
// import { shelfItems, type ShelfCategory } from "../../data/shelf";
// import "./Shelf.css";

// type Filter = "Everything" | ShelfCategory;

// const filters: Filter[] = [
//   "Everything",
//   "Book",
//   "Movie",
//   "Series",
//   "Playlist",
// ];

// const categoryLabels: Record<Filter, string> = {
//   Everything: "Everything",
//   Book: "Books",
//   Movie: "Movies",
//   Series: "Series",
//   Playlist: "Playlists",
// };

// const Shelf = () => {
//   const [activeFilter, setActiveFilter] = useState<Filter>("Everything");

//   const filteredItems = useMemo(() => {
//     if (activeFilter === "Everything") {
//       return shelfItems;
//     }

//     return shelfItems.filter((item) => item.category === activeFilter);
//   }, [activeFilter]);

//   const currentItems = shelfItems.filter(
//     (item) =>
//       item.status === "Currently Reading" ||
//       item.status === "Watching",
//   );

//   const counts = {
//     Book: shelfItems.filter((item) => item.category === "Book").length,
//     Movie: shelfItems.filter((item) => item.category === "Movie").length,
//     Series: shelfItems.filter((item) => item.category === "Series").length,
//     Playlist: shelfItems.filter((item) => item.category === "Playlist").length,
//   };

//   return (
//     <div className="shelf-page">
//       <header className="shelf-hero">
//         <p className="shelf-eyebrow">
//           BOOKS, FILMS, STORIES & SOUNDS THAT STAY
//         </p>

//         <h1 className="shelf-hero__title">
//           The Shelf<span>.</span>
//         </h1>

//         <p className="shelf-hero__intro">
//           A little corner for the stories I read, the worlds I watch,
//           the music I return to, and the things that stay with me
//           long after the credits roll.
//         </p>

//         <div className="shelf-hero__meta">
//           <span>{counts.Book} BOOKS</span>
//           <span>{counts.Movie} MOVIES</span>
//           <span>{counts.Series} SERIES</span>
//           <span>{counts.Playlist} PLAYLISTS</span>
//         </div>
//       </header>

//       <section className="shelf-current">
//         <div className="shelf-section-heading">
//           <div>
//             <p className="shelf-eyebrow">THE CURRENT ROTATION</p>
//             <h2>Into these lately.</h2>
//           </div>

//           <span className="shelf-section-note">
//             WHAT I'M READING & WATCHING
//           </span>
//         </div>

//         <div className="shelf-current__grid">
//           {currentItems.map((item) => (
//             <article className="shelf-current-card" key={item.id}>
//               <div
//                 className={`shelf-cover shelf-cover--${item.coverClass}`}
//                 aria-label={`Decorative cover for ${item.title}`}
//                 role="img"
//               >
//                 <span className="shelf-cover__category">
//                   {item.category}
//                 </span>
//                 <span className="shelf-cover__title">{item.title}</span>
//                 <span className="shelf-cover__creator">{item.creator}</span>
//               </div>

//               <div className="shelf-current-card__info">
//                 <span className="shelf-status shelf-status--current">
//                   {item.status}
//                 </span>

//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="shelf-collection">
//         <div className="shelf-section-heading">
//           <div>
//             <p className="shelf-eyebrow">THE PERSONAL ARCHIVE</p>
//             <h2>A collection of stories.</h2>
//           </div>

//           <span className="shelf-section-note">
//             {filteredItems.length} ITEMS
//           </span>
//         </div>

//         <div
//           className="shelf-filters"
//           role="group"
//           aria-label="Filter collection by category"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               type="button"
//               className={`shelf-filter ${
//                 activeFilter === filter ? "is-active" : ""
//               }`}
//               onClick={() => setActiveFilter(filter)}
//               aria-pressed={activeFilter === filter}
//             >
//               {categoryLabels[filter]}
//             </button>
//           ))}
//         </div>

//         {filteredItems.length > 0 ? (
//           <div className="shelf-grid">
//             {filteredItems.map((item) => (
//               <article
//                 className={`shelf-card ${
//                   item.category === "Playlist" ? "shelf-card--playlist" : ""
//                 }`}
//                 key={item.id}
//               >
//                 {item.category !== "Playlist" && (
//                   <div
//                     className={`shelf-cover shelf-cover--${item.coverClass}`}
//                     role="img"
//                     aria-label={`Decorative cover for ${item.title}`}
//                   >
//                     <span className="shelf-cover__category">
//                       {item.category}
//                       {item.year ? ` · ${item.year}` : ""}
//                     </span>

//                     <span className="shelf-cover__title">{item.title}</span>
//                     <span className="shelf-cover__creator">{item.creator}</span>
//                   </div>
//                 )}

//                 {item.category === "Playlist" && (
//                   <div className="shelf-playlist-heading">
//                     <span className="shelf-playlist-heading__icon" aria-hidden="true">
//                       ♫
//                     </span>
//                     <span className="shelf-playlist-heading__label">
//                       SPOTIFY PLAYLIST
//                     </span>
//                   </div>
//                 )}

//                 <div className="shelf-card__body">
//                   <div className="shelf-card__meta">
//                     <span className="shelf-card__category">
//                       {categoryLabels[item.category]}
//                     </span>

//                     <span
//                       className={`shelf-status ${
//                         item.status === "Currently Reading" ||
//                         item.status === "Watching"
//                           ? "shelf-status--current"
//                           : ""
//                       }`}
//                     >
//                       {item.status}
//                     </span>
//                   </div>

//                   <h3>{item.title}</h3>

//                   <p className="shelf-card__creator">{item.creator}</p>

//                   <p className="shelf-card__description">
//                     {item.description}
//                   </p>

//                   {item.category === "Playlist" && item.spotifyPlaylistId && (
//                     <div className="shelf-playlist-player">
//                       <iframe
//                         title={`Spotify playlist: ${item.title}`}
//                         src={`https://open.spotify.com/embed/playlist/${encodeURIComponent(
//                           item.spotifyPlaylistId,
//                         )}?utm_source=generator&theme=0`}
//                         width="100%"
//                         height="352"
//                         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                         loading="lazy"
//                       />

//                       <a
//                         className="shelf-playlist-link"
//                         href={`https://open.spotify.com/playlist/${encodeURIComponent(
//                           item.spotifyPlaylistId,
//                         )}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Open in Spotify <span aria-hidden="true">↗</span>
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </article>
//             ))}
//           </div>
//         ) : (
//           <p className="shelf-empty">
//             Nothing on this shelf just yet.
//           </p>
//         )}
//       </section>

//       <footer className="shelf-note">
//         <p className="shelf-eyebrow">A PERSONAL COLLECTION</p>

//         <h2>
//           Some stories end.
//           <br />
//           Some stay with you.
//         </h2>

//         <p>
//           This collection will grow as I find new stories, revisit old
//           favourites, and discover things worth remembering.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Shelf;

import { useEffect, useMemo, useState } from "react";
import { getMediaItems, type MediaItemResponse } from "../../services/mediaApi";
import type { ShelfCategory, ShelfStatus } from "../../data/shelf";
import "./Shelf.css";

type Filter = "Everything" | ShelfCategory;

interface ShelfItem {
  id: string;
  title: string;
  category: ShelfCategory;
  status: ShelfStatus;
  creator: string;
  year?: number;
  description: string;
  coverClass: string;
  coverImageUrl: string | null;
  spotifyPlaylistId?: string;
}

const filters: Filter[] = [
  "Everything",
  "Book",
  "Movie",
  "Series",
  "Playlist",
];

const categoryLabels: Record<Filter, string> = {
  Everything: "Everything",
  Book: "Books",
  Movie: "Movies",
  Series: "Series",
  Playlist: "Playlists",
};

const coverClasses: Record<string, string> = {
  "Atomic Habits": "atomic-habits",
  "The Alchemist": "the-alchemist",
  Meditations: "meditations",
  Interstellar: "interstellar",
  "The Secret Life of Walter Mitty": "walter-mitty",
  "Good Will Hunting": "good-will-hunting",
  "Breaking Bad": "breaking-bad",
  "The Office": "the-office",
  Sherlock: "sherlock",
};

function mapMediaItem(item: MediaItemResponse): ShelfItem {
  let creator = "Unknown";

  if (item.category === "Book") {
    creator = item.bookDetails?.author || creator;
  } else if (item.category === "Movie") {
    creator = item.movieDetails?.director || creator;
  } else if (item.category === "Series") {
    creator = item.seriesDetails?.creator || creator;
  } else if (item.category === "Playlist") {
    creator = item.playlistDetails?.platform || "Spotify";
  }

  // let status: ShelfStatus = item.status;
  let status: ShelfStatus;

  if (item.status === "Reading") {
    status = "Currently Reading";
  } else if (item.category === "Series" && item.status === "Watched") {
    status = "Completed";
  } else {
    status = item.status;
  }

  if (item.status === "Reading") {
    status = "Currently Reading";
  } else if (item.category === "Series" && item.status === "Watched") {
    status = "Completed";
  }

  return {
    id: item.id,
    title: item.title,
    category: item.category,
    status,
    creator,
    year:
      item.category === "Movie"
        ? item.movieDetails?.releaseYear ?? undefined
        : undefined,
    description: item.description ?? "",
    coverClass:
      coverClasses[item.title] ??
      (item.category === "Playlist"
        ? "shelf-cover--playlist"
        : item.category.toLowerCase()),
    coverImageUrl: item.coverImageUrl,
    spotifyPlaylistId: item.playlistDetails?.spotifyPlaylistId,
  };
}

const Shelf = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("Everything");
  const [shelfItems, setShelfItems] = useState<ShelfItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadShelf() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getMediaItems();

        if (isMounted) {
          setShelfItems(response.map(mapMediaItem));
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load the collection."
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadShelf();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "Everything") {
      return shelfItems;
    }

    return shelfItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, shelfItems]);

  const currentItems = shelfItems.filter(
    (item) =>
      item.status === "Currently Reading" ||
      item.status === "Watching"
  );

  const counts = {
    Book: shelfItems.filter((item) => item.category === "Book").length,
    Movie: shelfItems.filter((item) => item.category === "Movie").length,
    Series: shelfItems.filter((item) => item.category === "Series").length,
    Playlist: shelfItems.filter((item) => item.category === "Playlist").length,
  };

  const coverStyle = (item: ShelfItem) =>
    item.coverImageUrl
      ? {
          backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.78) 100%), url("${item.coverImageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : undefined;

  return (
    <div className="shelf-page">
      <header className="shelf-hero">
        <p className="shelf-eyebrow">
          BOOKS, FILMS, STORIES & SOUNDS THAT STAY
        </p>

        <h1 className="shelf-hero__title">
          The Shelf<span>.</span>
        </h1>

        <p className="shelf-hero__intro">
          A little corner for the stories I read, the worlds I watch,
          the music I return to, and the things that stay with me
          long after the credits roll.
        </p>

        <div className="shelf-hero__meta">
          <span>{counts.Book} BOOKS</span>
          <span>{counts.Movie} MOVIES</span>
          <span>{counts.Series} SERIES</span>
          <span>{counts.Playlist} PLAYLISTS</span>
        </div>
      </header>

      {error && (
        <div role="alert" className="shelf-empty">
          <p>We couldn't load the collection.</p>
          <p>{error}</p>
          <button type="button" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      )}

      <section className="shelf-current">
        <div className="shelf-section-heading">
          <div>
            <p className="shelf-eyebrow">THE CURRENT ROTATION</p>
            <h2>Into these lately.</h2>
          </div>

          <span className="shelf-section-note">
            WHAT I'M READING & WATCHING
          </span>
        </div>

        {isLoading ? (
          <p className="shelf-empty">Loading your collection...</p>
        ) : (
          <div className="shelf-current__grid">
            {currentItems.map((item) => (
              <article className="shelf-current-card" key={item.id}>
                <div
                  className={`shelf-cover shelf-cover--${item.coverClass}`}
                  style={coverStyle(item)}
                  aria-label={`Cover for ${item.title}`}
                  role="img"
                >
                  <span className="shelf-cover__category">
                    {item.category}
                  </span>
                  <span className="shelf-cover__title">{item.title}</span>
                  <span className="shelf-cover__creator">{item.creator}</span>
                </div>

                <div className="shelf-current-card__info">
                  <span className="shelf-status shelf-status--current">
                    {item.status}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="shelf-collection">
        <div className="shelf-section-heading">
          <div>
            <p className="shelf-eyebrow">THE PERSONAL ARCHIVE</p>
            <h2>A collection of stories.</h2>
          </div>

          <span className="shelf-section-note">
            {filteredItems.length} ITEMS
          </span>
        </div>

        <div
          className="shelf-filters"
          role="group"
          aria-label="Filter collection by category"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`shelf-filter ${
                activeFilter === filter ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {categoryLabels[filter]}
            </button>
          ))}
        </div>

        {isLoading ? (
          <p className="shelf-empty">Fetching items from your Media API...</p>
        ) : filteredItems.length > 0 ? (
          <div className="shelf-grid">
            {filteredItems.map((item) => (
              <article
                className={`shelf-card ${
                  item.category === "Playlist" ? "shelf-card--playlist" : ""
                }`}
                key={item.id}
              >
                {item.category !== "Playlist" && (
                  <div
                    className={`shelf-cover shelf-cover--${item.coverClass}`}
                    style={coverStyle(item)}
                    role="img"
                    aria-label={`Cover for ${item.title}`}
                  >
                    <span className="shelf-cover__category">
                      {item.category}
                      {item.year ? ` · ${item.year}` : ""}
                    </span>
                    <span className="shelf-cover__title">{item.title}</span>
                    <span className="shelf-cover__creator">{item.creator}</span>
                  </div>
                )}

                {item.category === "Playlist" && (
                  <div className="shelf-playlist-heading">
                    <span
                      className="shelf-playlist-heading__icon"
                      aria-hidden="true"
                    >
                      ♫
                    </span>
                    <span className="shelf-playlist-heading__label">
                      SPOTIFY PLAYLIST
                    </span>
                  </div>
                )}

                <div className="shelf-card__body">
                  <div className="shelf-card__meta">
                    <span className="shelf-card__category">
                      {categoryLabels[item.category]}
                    </span>

                    <span
                      className={`shelf-status ${
                        item.status === "Currently Reading" ||
                        item.status === "Watching"
                          ? "shelf-status--current"
                          : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p className="shelf-card__creator">{item.creator}</p>

                  <p className="shelf-card__description">
                    {item.description}
                  </p>

                  {item.category === "Playlist" &&
                    item.spotifyPlaylistId && (
                      <div className="shelf-playlist-player">
                        <iframe
                          title={`Spotify playlist: ${item.title}`}
                          src={`https://open.spotify.com/embed/playlist/${encodeURIComponent(
                            item.spotifyPlaylistId
                          )}?utm_source=generator&theme=0`}
                          width="100%"
                          height="352"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                        />

                        <a
                          className="shelf-playlist-link"
                          href={`https://open.spotify.com/playlist/${encodeURIComponent(
                            item.spotifyPlaylistId
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open in Spotify <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    )}
                </div>
              </article>
            ))}
          </div>
        ) : !error ? (
          <p className="shelf-empty">Nothing on this shelf just yet.</p>
        ) : null}
      </section>

      <footer className="shelf-note">
        <p className="shelf-eyebrow">A PERSONAL COLLECTION</p>
        <h2>
          Some stories end.
          <br />
          Some stay with you.
        </h2>
        <p>
          This collection will grow as I find new stories, revisit old
          favourites, and discover things worth remembering.
        </p>
      </footer>
    </div>
  );
};

export default Shelf;
