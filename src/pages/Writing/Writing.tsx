
// import { writingItems } from "../../data/writing";
// import "./Writing.css";

// function Writing() {
//   return (
//     <main className="writing-page">
//       <section className="writing-hero">
//         <span className="writing-eyebrow">WORDS, THOUGHTS & EVERYTHING BETWEEN</span>

//         <h1>
//           Things I've
//           <br />
//           <span>written.</span>
//         </h1>

//         <p className="writing-intro">
//           Thoughts I've put into words, things I've learned,
//           and ideas I couldn't quite keep to myself.
//         </p>
//       </section>

//       <section className="writing-section" aria-labelledby="published-heading">
//         <div className="writing-section__heading">
//           <div>
//             <span className="writing-kicker">OUT IN THE WORLD</span>
//             <h2 id="published-heading">Writing elsewhere</h2>
//           </div>

//           <span className="writing-count">
//             {String(writingItems.length).padStart(2, "0")} pieces
//           </span>
//         </div>

//         {writingItems.length > 0 ? (
//           <div className="writing-grid">
//             {writingItems.map((item, index) => (
//               <article className="writing-card" key={item.id}>
//                 <div className="writing-card__top">
//                   <span className="writing-card__number">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="writing-card__publication">
//                     {item.publication}
//                   </span>
//                 </div>

//                 <h3>{item.title}</h3>

//                 <p className="writing-card__description">
//                   {item.description}
//                 </p>

//                 <div className="writing-card__bottom">
//                   <span>{item.publishedAt ?? "An article"}</span>

//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`Read ${item.title} on ${item.publication}`}
//                   >
//                     Read article <span aria-hidden="true">↗</span>
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         ) : (
//           <div className="writing-empty">
//             <span className="writing-empty__symbol" aria-hidden="true">
//               ↗
//             </span>
//             <div>
//               <h3>The first piece is yet to come.</h3>
//               <p>
//                 When I publish something worth sharing, you'll find it here —
//                 along with a link to where it lives.
//               </p>
//             </div>
//           </div>
//         )}
//       </section>

//       <section className="journal-section" aria-labelledby="journal-heading">
//         <div className="journal-section__content">
//           <span className="writing-kicker">A MORE PERSONAL SPACE</span>

//           <h2 id="journal-heading">
//             Some things are
//             <br />
//             <span>just for the page.</span>
//           </h2>

//           <p>
//             A personal journal for unfinished thoughts, little observations,
//             things I'm figuring out, and moments I don't want to forget.
//             A little more personal than a blog, and a little less polished.
//           </p>

//           <div className="journal-section__footer">
//             <span className="journal-status">
//               <span className="journal-status__dot" />
//               Still taking shape
//             </span>

//             <span className="journal-access-note">
//               Subscriber access · Coming later
//             </span>
//           </div>
//         </div>

//         <div className="journal-section__art" aria-hidden="true">
//           <div className="journal-orbit journal-orbit--outer" />
//           <div className="journal-orbit journal-orbit--inner" />

//           <div className="journal-note">
//             <span className="journal-note__date">A NOTE TO SELF</span>
//             <div className="journal-note__line journal-note__line--long" />
//             <div className="journal-note__line" />
//             <div className="journal-note__line journal-note__line--short" />
//             <span className="journal-note__scribble">keep going.</span>
//           </div>

//           <span className="journal-art-star journal-art-star--one">✳</span>
//           <span className="journal-art-star journal-art-star--two">✳</span>
//         </div>
//       </section>

//       <footer className="writing-footer">
//         <p>More words, whenever they find me.</p>
//       </footer>
//     </main>
//   );
// }

// export default Writing;



import { useEffect, useState } from "react";
import "./Writing.css";

const API_BASE_URL = (
  import.meta.env.VITE_CONTENT_API_URL as string | undefined
)?.replace(/\/+$/, "");

type Blog = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  coverImageUrl: string | null;
  externalUrl: string;
  publishedAt: string | null;
  createdAt: string;
};

type Journal = {
  id: string;
  title: string;
  content: string;
  mood: string | null;
  category: string;
  tags: string[];
  isPublic: boolean;
  createdAt: string;
  images: {
    id: string;
    imageUrl: string;
    caption: string | null;
    sortOrder: number;
  }[];
};

function formatDate(value: string | null | undefined) {
  if (!value) return "An article";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "An article";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function Writing() {
  const [writingItems, setWritingItems] = useState<Blog[]>([]);
  const [journals, setJournals] = useState<Journal[]>([]);

  const [blogsLoading, setBlogsLoading] = useState(true);
  const [journalsLoading, setJournalsLoading] = useState(true);

  const [blogsError, setBlogsError] = useState("");
  const [journalsError, setJournalsError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadBlogs() {
      if (!API_BASE_URL) {
        setBlogsError("The Content API URL is not configured.");
        setBlogsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);

        if (!response.ok) {
          throw new Error(`Unable to load articles (${response.status}).`);
        }

        const data: Blog[] = await response.json();

        if (!cancelled) {
          setWritingItems(
            data.filter(
              (item) =>
                item.externalUrl &&
                /^https?:\/\//i.test(item.externalUrl)
            )
          );
          setBlogsError("");
        }
      } catch (error) {
        if (!cancelled) {
          setBlogsError(
            error instanceof Error
              ? error.message
              : "Unable to load articles."
          );
        }
      } finally {
        if (!cancelled) setBlogsLoading(false);
      }
    }

    async function loadJournals() {
      if (!API_BASE_URL) {
        setJournalsError("The Content API URL is not configured.");
        setJournalsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/journals/public`
        );

        if (!response.ok) {
          throw new Error(
            `Unable to load journal entries (${response.status}).`
          );
        }

        const data: Journal[] = await response.json();

        if (!cancelled) {
          setJournals(data.filter((entry) => entry.isPublic));
          setJournalsError("");
        }
      } catch (error) {
        if (!cancelled) {
          setJournalsError(
            error instanceof Error
              ? error.message
              : "Unable to load journal entries."
          );
        }
      } finally {
        if (!cancelled) setJournalsLoading(false);
      }
    }

    void loadBlogs();
    void loadJournals();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="writing-page">
      <section className="writing-hero">
        <span className="writing-eyebrow">
          WORDS, THOUGHTS & EVERYTHING BETWEEN
        </span>

        <h1>
          Things I've
          <br />
          <span>written.</span>
        </h1>

        <p className="writing-intro">
          Thoughts I've put into words, things I've learned,
          and ideas I couldn't quite keep to myself.
        </p>
      </section>

      <section
        className="writing-section"
        aria-labelledby="published-heading"
      >
        <div className="writing-section__heading">
          <div>
            <span className="writing-kicker">OUT IN THE WORLD</span>
            <h2 id="published-heading">Writing elsewhere</h2>
          </div>

          <span className="writing-count">
            {String(writingItems.length).padStart(2, "0")} pieces
          </span>
        </div>

        {blogsLoading ? (
          <p className="writing-feedback" role="status">
            Finding the words...
          </p>
        ) : blogsError ? (
          <p className="writing-feedback" role="alert">
            {blogsError}
          </p>
        ) : writingItems.length > 0 ? (
          <div className="writing-grid">
            {writingItems.map((item, index) => (
              <article className="writing-card" key={item.id}>
                <div className="writing-card__top">
                  <span className="writing-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="writing-card__publication">
                    {item.category}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p className="writing-card__description">
                  {item.description}
                </p>

                {item.tags?.length > 0 && (
                  <div className="writing-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}

                <div className="writing-card__bottom">
                  <span>
                    {formatDate(item.publishedAt ?? item.createdAt)}
                  </span>

                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${item.title} on ${item.category}`}
                  >
                    Read article <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="writing-empty">
            <span className="writing-empty__symbol" aria-hidden="true">
              ↗
            </span>
            <div>
              <h3>The first piece is yet to come.</h3>
              <p>
                When I publish something worth sharing, you'll find it here —
                along with a link to where it lives.
              </p>
            </div>
          </div>
        )}
      </section>

      <section
        className="journal-section"
        aria-labelledby="journal-heading"
      >
        <div className="journal-section__content">
          <span className="writing-kicker">A MORE PERSONAL SPACE</span>

          <h2 id="journal-heading">
            Some things are
            <br />
            <span>just for the page.</span>
          </h2>

          <p>
            A personal journal for unfinished thoughts, little observations,
            things I'm figuring out, and moments I don't want to forget.
            A little more personal than a blog, and a little less polished.
          </p>

          <div className="journal-section__footer">
            <span className="journal-status">
              <span className="journal-status__dot" />
              {journalsLoading
                ? "Gathering thoughts"
                : journalsError
                  ? "Temporarily unavailable"
                  : journals.length > 0
                    ? `${journals.length} public ${
                        journals.length === 1 ? "entry" : "entries"
                      }`
                    : "Still taking shape"}
            </span>

            <span className="journal-access-note">
              Public reflections
            </span>
          </div>
        </div>

        <div className="journal-section__art" aria-hidden="true">
          <div className="journal-orbit journal-orbit--outer" />
          <div className="journal-orbit journal-orbit--inner" />

          <div className="journal-note">
            <span className="journal-note__date">A NOTE TO SELF</span>
            <div className="journal-note__line journal-note__line--long" />
            <div className="journal-note__line" />
            <div className="journal-note__line journal-note__line--short" />
            <span className="journal-note__scribble">keep going.</span>
          </div>

          <span className="journal-art-star journal-art-star--one">✳</span>
          <span className="journal-art-star journal-art-star--two">✳</span>
        </div>

        {journalsError && (
          <p className="journal-feedback" role="alert">
            {journalsError}
          </p>
        )}

        {!journalsLoading && !journalsError && journals.length > 0 && (
          <div className="journal-entries">
            {journals.map((entry) => (
              <article className="journal-entry" key={entry.id}>
                <div className="journal-entry__meta">
                  <span>{entry.category}</span>
                  <span>{formatDate(entry.createdAt)}</span>
                </div>

                <h3>{entry.title}</h3>

                {entry.mood && (
                  <span className="journal-entry__mood">
                    Feeling {entry.mood.toLowerCase()}
                  </span>
                )}

                <p className="journal-entry__content">
                  {entry.content}
                </p>

                {entry.images?.length > 0 && (
                  <div className="journal-entry__images">
                    {entry.images
                      .slice()
                      .sort((a, b) => a.sortOrder - b.sortOrder)
                      .map((image) => (
                        <figure key={image.id}>
                          <img
                            src={image.imageUrl}
                            alt={image.caption || entry.title}
                            loading="lazy"
                          />
                          {image.caption && (
                            <figcaption>{image.caption}</figcaption>
                          )}
                        </figure>
                      ))}
                  </div>
                )}

                {entry.tags?.length > 0 && (
                  <div className="writing-tags">
                    {entry.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="writing-footer">
        <p>More words, whenever they find me.</p>
      </footer>
    </main>
  );
}

export default Writing;
