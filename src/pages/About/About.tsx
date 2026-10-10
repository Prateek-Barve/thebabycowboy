import "./About.css";

const About = () => {
  return (
    <article className="about-page">
      <header className="about-hero">
        <p className="about-eyebrow">A LITTLE ABOUT ME</p>

        <h1 className="about-hero__title">
          A person,
          <br />
          still becoming.
        </h1>

        <p className="about-hero__intro">
          Building things, collecting experiences, and trying to
          understand the world a little better along the way.
        </p>

        <div className="about-hero__signature">
          <span className="about-hero__line" />
          <span>A work in progress, always.</span>
        </div>
      </header>

      <section className="about-section">
        <div className="about-section__label">
          <span>01</span>
          <span>THE PERSON</span>
        </div>

        <div className="about-section__content">
          <h2>More than what I do.</h2>

          <p>
            I'm interested in the things that make life interesting:
            learning something new, getting lost in a good idea,
            discovering unfamiliar places, and figuring things out
            along the way.
          </p>

          <p>
            Technology is a big part of my world, but it isn't the
            whole story. I'm equally drawn to the human side of things
            — how we think, what we believe, the choices we make,
            and how we change over time.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section__label">
          <span>02</span>
          <span>WHAT INTERESTS ME</span>
        </div>

        <div className="about-section__content">
          <h2>A few things I'm drawn to.</h2>

          <div className="about-interests">
            <article className="about-interest about-interest--sage">
              <span className="about-interest__number">01 / BUILD</span>
              <h3>Technology</h3>
              <p>
                Software, AI, and the joy of turning an idea into
                something real that someone can use.
              </p>
            </article>

            <article className="about-interest about-interest--lavender">
              <span className="about-interest__number">02 / THINK</span>
              <h3>Ideas &amp; books</h3>
              <p>
                Questions about people, philosophy, habits, and
                perspectives that challenge the obvious.
              </p>
            </article>

            <article className="about-interest about-interest--peach">
              <span className="about-interest__number">03 / EXPLORE</span>
              <h3>Places &amp; experiences</h3>
              <p>
                Road trips, unfamiliar streets, new experiences,
                and the stories that come home with me.
              </p>
            </article>

            <article className="about-interest about-interest--blue">
              <span className="about-interest__number">04 / GROW</span>
              <h3>The work in progress</h3>
              <p>
                Learning new skills, building better habits, and
                becoming a little more intentional about life.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section__label">
          <span>03</span>
          <span>WHY THIS SPACE EXISTS</span>
        </div>

        <div className="about-section__content about-closing">
          <h2>A place for everything in between.</h2>

          <p>
            The internet has enough polished profiles. I wanted a
            little corner that could hold more than that — projects
            I'm proud of, places I've been, things I've read,
            thoughts I don't want to lose, and ideas that might
            become something someday.
          </p>

          <p>
            Not everything here needs to be finished, figured out,
            or particularly impressive. Some things can simply be
            part of the journey.
          </p>

          <p className="about-closing__signoff">
            Anyway, glad you found your way here.
          </p>
        </div>
      </section>
    </article>
  );
};

export default About;