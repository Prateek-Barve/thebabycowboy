// import "./Travel.css";

// type Trip = {
//   number: string;
//   title: string;
//   location: string;
//   category: string;
//   description: string;
//   color: string;
//   status: string;
// };

// const trips: Trip[] = [
//   {
//     number: "01",
//     title: "The road to the hills",
//     location: "Kodaikanal, Tamil Nadu",
//     category: "ROAD TRIP",
//     description:
//       "Winding roads, changing landscapes, cooler air, and the feeling of getting a little distance from the usual routine.",
//     color: "forest",
//     status: "TRIP JOURNAL",
//   },
//   {
//     number: "02",
//     title: "Somewhere along the way",
//     location: "Madurai, Tamil Nadu",
//     category: "ON THE ROAD",
//     description:
//       "A collection of moments from the journey — the roads, the surroundings, and everything between the starting point and the destination.",
//     color: "terracotta",
//     status: "TRIP JOURNAL",
//   },
//   {
//     number: "03",
//     title: "The next somewhere",
//     location: "A place yet to be decided",
//     category: "UP NEXT",
//     description:
//       "There are always more roads to take, unfamiliar corners to explore, and places waiting to become memories.",
//     color: "lavender",
//     status: "TO BE DISCOVERED",
//   },
// ];

// const Travel = () => {
//   return (
//     <div className="travel-page">
//       <header className="travel-hero">
//         <p className="travel-eyebrow">PLACES, ROADS & LITTLE MOMENTS</p>

//         <h1 className="travel-hero__title">
//           Out there,
//           <br />
//           somewhere.
//         </h1>

//         <p className="travel-hero__intro">
//           A journal of places I've been, roads I've taken, and
//           moments that felt worth keeping. Not a guide to seeing
//           everything — just a record of seeing a little more.
//         </p>

//         <div className="travel-hero__signature">
//           <span className="travel-hero__line" />
//           <span>Collected along the way.</span>
//         </div>
//       </header>

//       <section className="travel-featured">
//         <div className="travel-section-heading">
//           <div>
//             <p className="travel-eyebrow">RECENTLY ON THE ROAD</p>
//             <h2>A change of scenery.</h2>
//           </div>
//           <span className="travel-index">01 — 03</span>
//         </div>

//         <article className="travel-feature">
//           <div className="travel-feature__art" aria-label="Decorative landscape illustration">
//             <div className="travel-feature__sun" />
//             <div className="travel-feature__mountain travel-feature__mountain--back" />
//             <div className="travel-feature__mountain travel-feature__mountain--front" />
//             <div className="travel-feature__road" />
//             <span className="travel-feature__art-label">
//               TAKE THE SCENIC ROUTE
//             </span>
//           </div>

//           <div className="travel-feature__details">
//             <p className="travel-eyebrow">TAMIL NADU · ROAD TRIP</p>

//             <h3>Madurai to Kodaikanal</h3>

//             <p>
//               Some trips are less about reaching a destination and
//               more about stepping outside the usual rhythm of life.
//               This one had roads to follow, landscapes to take in,
//               and moments to collect along the way.
//             </p>

//             <div className="travel-feature__meta">
//               <span>ROAD NOTES</span>
//               <span>PHOTOGRAPHS</span>
//               <span>MEMORIES</span>
//             </div>
//           </div>
//         </article>
//       </section>

//       <section className="travel-collection">
//         <div className="travel-section-heading">
//           <div>
//             <p className="travel-eyebrow">THE TRAVEL JOURNAL</p>
//             <h2>Here and there.</h2>
//           </div>
//           <p className="travel-collection__note">
//             Every place leaves something behind.
//           </p>
//         </div>

//         <div className="travel-grid">
//           {trips.map((trip) => (
//             <article
//               className={`travel-card travel-card--${trip.color}`}
//               key={trip.number}
//             >
//               <div className="travel-card__art">
//                 <span className="travel-card__number">
//                   {trip.number}
//                 </span>

//                 <span className="travel-card__art-symbol" aria-hidden="true">
//                   {trip.color === "forest"
//                     ? "⌁"
//                     : trip.color === "terracotta"
//                       ? "◌"
//                       : "↗"}
//                 </span>

//                 <span className="travel-card__art-caption">
//                   {trip.category}
//                 </span>
//               </div>

//               <div className="travel-card__body">
//                 <p className="travel-card__location">{trip.location}</p>

//                 <h3>{trip.title}</h3>

//                 <p className="travel-card__description">
//                   {trip.description}
//                 </p>

//                 <div className="travel-card__footer">
//                   <span>{trip.status}</span>
//                   <span aria-hidden="true">↗</span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="travel-note">
//         <p className="travel-eyebrow">A THOUGHT TO TAKE ALONG</p>
//         <h2>
//           You don't always need a plan.
//           <br />
//           Sometimes, just a direction.
//         </h2>
//         <p>
//           More places, photographs, and stories will find their way
//           here as the journey continues.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Travel;

import { useEffect, useState } from "react";
import "./Travel.css";
import { contentApi, type TravelTrip } from "../../services/contentApi";

const tripColors = ["forest", "terracotta", "lavender"];

const Travel = () => {
  const [trips, setTrips] = useState<TravelTrip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadTrips() {
      setLoading(true);
      setError("");

      try {
        const data = await contentApi.getTrips();

        if (active) setTrips(data);
      } catch (err) {
        if (!active) return;

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load travel entries."
        );
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadTrips();

    return () => {
      active = false;
    };
  }, []);

  const featuredTrip = trips[0];

  return (
    <div className="travel-page">
      <header className="travel-hero">
        <p className="travel-eyebrow">
          PLACES, ROADS &amp; LITTLE MOMENTS
        </p>

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

      {loading && (
        <p className="content-state" role="status">
          Gathering stories from the road...
        </p>
      )}

      {!loading && error && (
        <div className="content-state content-state--error" role="alert">
          <p>We couldn't load your travel journal.</p>
          <p>{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          {featuredTrip && (
            <section className="travel-featured">
              <div className="travel-section-heading">
                <div>
                  <p className="travel-eyebrow">
                    A PLACE I'VE BEEN
                  </p>
                  <h2>A change of scenery.</h2>
                </div>

                <span className="travel-index">
                  01 — {String(trips.length).padStart(2, "0")}
                </span>
              </div>

              <article className="travel-feature">
                <div className="travel-feature__art">
                  {featuredTrip.coverImageUrl ? (
                    <img
                      className="travel-feature__image"
                      src={featuredTrip.coverImageUrl}
                      alt={`${featuredTrip.title} cover`}
                    />
                  ) : (
                    <>
                      <div className="travel-feature__sun" />
                      <div className="travel-feature__mountain travel-feature__mountain--back" />
                      <div className="travel-feature__mountain travel-feature__mountain--front" />
                      <div className="travel-feature__road" />
                    </>
                  )}

                  <span className="travel-feature__art-label">
                    TAKE THE SCENIC ROUTE
                  </span>
                </div>

                <div className="travel-feature__details">
                  <p className="travel-eyebrow">
                    {featuredTrip.location} · {featuredTrip.country}
                  </p>

                  <h3>{featuredTrip.title}</h3>

                  <p>{featuredTrip.description}</p>

                  <div className="travel-feature__meta">
                    <span>TRAVEL NOTES</span>
                    <span>PHOTOGRAPHS</span>
                    <span>MEMORIES</span>
                  </div>
                </div>
              </article>

              {featuredTrip.photos?.length > 0 && (
                <div className="travel-photo-gallery">
                  {featuredTrip.photos.map((photo) => (
                    <figure key={photo.id} className="travel-photo">
                      <img
                        src={photo.imageUrl}
                        alt={
                          photo.caption ||
                          `Photograph from ${featuredTrip.title}`
                        }
                        loading="lazy"
                      />
                      {photo.caption && (
                        <figcaption>{photo.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </section>
          )}

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

            {trips.length === 0 ? (
              <p className="content-state">
                No trips have been added yet. Your next story starts here.
              </p>
            ) : (
              <div className="travel-grid">
                {trips.map((trip, index) => (
                  <article
                    className={`travel-card travel-card--${
                      tripColors[index % tripColors.length]
                    }`}
                    key={trip.id}
                  >
                    <div className="travel-card__art">
                      {trip.coverImageUrl ? (
                        <img
                          className="travel-card__image"
                          src={trip.coverImageUrl}
                          alt={`${trip.title} cover`}
                          loading="lazy"
                        />
                      ) : (
                        <span
                          className="travel-card__art-symbol"
                          aria-hidden="true"
                        >
                          {index % 3 === 0
                            ? "⌁"
                            : index % 3 === 1
                              ? "◌"
                              : "↗"}
                        </span>
                      )}

                      <span className="travel-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="travel-card__art-caption">
                        TRAVEL JOURNAL
                      </span>
                    </div>

                    <div className="travel-card__body">
                      <p className="travel-card__location">
                        {trip.location}, {trip.country}
                      </p>

                      <h3>{trip.title}</h3>

                      <p className="travel-card__description">
                        {trip.description}
                      </p>

                      {trip.photos?.length > 0 && (
                        <p className="travel-card__photo-count">
                          {trip.photos.length}{" "}
                          {trip.photos.length === 1
                            ? "photograph"
                            : "photographs"}
                        </p>
                      )}

                      <div className="travel-card__footer">
                        <span>TRIP JOURNAL</span>
                        <span aria-hidden="true">↗</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
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
        </>
      )}
    </div>
  );
};

export default Travel;
