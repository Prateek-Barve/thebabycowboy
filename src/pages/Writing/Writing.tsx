
import { writingItems } from "../../data/writing";
import "./Writing.css";

function Writing() {
  return (
    <main className="writing-page">
      <section className="writing-hero">
        <span className="writing-eyebrow">WORDS, THOUGHTS & EVERYTHING BETWEEN</span>

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

      <section className="writing-section" aria-labelledby="published-heading">
        <div className="writing-section__heading">
          <div>
            <span className="writing-kicker">OUT IN THE WORLD</span>
            <h2 id="published-heading">Writing elsewhere</h2>
          </div>

          <span className="writing-count">
            {String(writingItems.length).padStart(2, "0")} pieces
          </span>
        </div>

        {writingItems.length > 0 ? (
          <div className="writing-grid">
            {writingItems.map((item, index) => (
              <article className="writing-card" key={item.id}>
                <div className="writing-card__top">
                  <span className="writing-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="writing-card__publication">
                    {item.publication}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p className="writing-card__description">
                  {item.description}
                </p>

                <div className="writing-card__bottom">
                  <span>{item.publishedAt ?? "An article"}</span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${item.title} on ${item.publication}`}
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

      <section className="journal-section" aria-labelledby="journal-heading">
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
              Still taking shape
            </span>

            <span className="journal-access-note">
              Subscriber access · Coming later
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
      </section>

      <footer className="writing-footer">
        <p>More words, whenever they find me.</p>
      </footer>
    </main>
  );
}

export default Writing;
