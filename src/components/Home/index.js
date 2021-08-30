import { Link } from "react-router-dom";
import { IoEarthOutline } from "react-icons/io5";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h1>WEATHER</h1>
      <h3>select a city</h3>
      <IoEarthOutline className="earth-icon" size={110} fontWeight={100} />
      <ul>
        <li>
          <Link className="link" to="/dallol/climate-info">
            Dallol
          </Link>
        </li>
        <li>
          <Link className="link" to="/fairbanks/climate-info">
            Fairbanks
          </Link>
        </li>
        <li>
          <Link className="link" to="/london/climate-info">
            London
          </Link>
        </li>
        <li>
          <Link className="link" to="/recife/climate-info">
            Recife
          </Link>
        </li>
        <li>
          <Link className="link" to="/vancouver/climate-info">
            Vancouver
          </Link>
        </li>
        <li>
          <Link className="link" to="/yakutsk/climate-info">
            Yakutsk
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
