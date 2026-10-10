import ThoughtExperience from "../../components/home/ThoughtExperience";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home__brand">
        thebabycowboy
      </div>
      
      <a className="home-explore-link" href="/about">
        Explore <span aria-hidden="true">↗</span>
      </a>


      <div className="home__content">
        <ThoughtExperience />
      </div>

      <footer className="home__footer">
        <span>Something to think about</span>
        <span>01</span>
      </footer>
    </main>
  );
};
export default Home;