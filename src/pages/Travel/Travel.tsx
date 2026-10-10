import "./Travel.css";

type Trip = {
  number: string;
  title: string;
  location: string;
  category: string;
  description: string;
  color: string;
  status: string;
};

const trips: Trip[] = [
  {
    number: "01",
    title: "The road to the hills",
    location: "Kodaikanal, Tamil Nadu",
    category: "ROAD TRIP",
    description:
      "Winding roads, changing landscapes, cooler air, and the feeling of getting a little distance from the usual routine.",
    color: "forest",
    status: "TRIP JOURNAL",
  },
  {
    number: "02",
    title: "Somewhere along the way",
    location: "Madurai, Tamil Nadu",
    category: "ON THE ROAD",
    description:
      "A collection of moments from the journey — the roads, the surroundings, and everything between the starting point and the destination.",
    color: "terracotta",
    status: "TRIP JOURNAL",
  },
  {
    number: "03",
    title: "The next somewhere",
    location: "A place yet to be decided",
    category: "UP NEXT",
    description:
      "There are always more roads to take, unfamiliar corners to explore, and places waiting to become memories.",
    color: "lavender",
    status: "TO BE DISCOVERED",
  },
];

const Travel = () => {
  return (
    <div className="travel-page">
      <header className="travel-hero">
        <p className="travel-eyebrow">PLACES, ROADS & LITTLE MOMENTS</p>

        <h1 className="travel-hero__title">
          Out there,
          <br />
          somewhere.
        </h1>

        <p className="travel-hero__intro">
          A journal of places I've been, roads I've taken, and
          moments that felt worth keeping. Not a guide to seeing
          everything — just a record of seeing a little more.
        </p>

        <div className="travel-hero__signature">
          <span className="travel-hero__line" />
          <span>Collected along the way.</span>
        </div>
      </header>

      <section className="travel-featured">
        <div className="travel-section-heading">
          <div>
            <p className="travel-eyebrow">RECENTLY ON THE ROAD</p>
            <h2>A change of scenery.</h2>
          </div>
          <span className="travel-index">01 — 03</span>
        </div>

        <article className="travel-feature">
          <div className="travel-feature__art" aria-label="Decorative landscape illustration">
            <div className="travel-feature__sun" />
            <div className="travel-feature__mountain travel-feature__mountain--back" />
            <div className="travel-feature__mountain travel-feature__mountain--front" />
            <div className="travel-feature__road" />
            <span className="travel-feature__art-label">
              TAKE THE SCENIC ROUTE
            </span>
          </div>

          <div className="travel-feature__details">
            <p className="travel-eyebrow">TAMIL NADU · ROAD TRIP</p>

            <h3>Madurai to Kodaikanal</h3>

            <p>
              Some trips are less about reaching a destination and
              more about stepping outside the usual rhythm of life.
              This one had roads to follow, landscapes to take in,
              and moments to collect along the way.
            </p>

            <div className="travel-feature__meta">
              <span>ROAD NOTES</span>
              <span>PHOTOGRAPHS</span>
              <span>MEMORIES</span>
            </div>
          </div>
        </article>
      </section>

      <section className="travel-collection">
        <div className="travel-section-heading">
          <div>
            <p className="travel-eyebrow">THE TRAVEL JOURNAL</p>
            <h2>Here and there.</h2>
          </div>
          <p className="travel-collection__note">
            Every place leaves something behind.
          </p>
        </div>

        <div className="travel-grid">
          {trips.map((trip) => (
            <article
              className={`travel-card travel-card--${trip.color}`}
              key={trip.number}
            >
              <div className="travel-card__art">
                <span className="travel-card__number">
                  {trip.number}
                </span>

                <span className="travel-card__art-symbol" aria-hidden="true">
                  {trip.color === "forest"
                    ? "⌁"
                    : trip.color === "terracotta"
                      ? "◌"
                      : "↗"}
                </span>

                <span className="travel-card__art-caption">
                  {trip.category}
                </span>
              </div>

              <div className="travel-card__body">
                <p className="travel-card__location">{trip.location}</p>

                <h3>{trip.title}</h3>

                <p className="travel-card__description">
                  {trip.description}
                </p>

                <div className="travel-card__footer">
                  <span>{trip.status}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="travel-note">
        <p className="travel-eyebrow">A THOUGHT TO TAKE ALONG</p>
        <h2>
          You don't always need a plan.
          <br />
          Sometimes, just a direction.
        </h2>
        <p>
          More places, photographs, and stories will find their way
          here as the journey continues.
        </p>
      </section>
    </div>
  );
};

export default Travel;