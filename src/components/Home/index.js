import { IoEarthOutline } from "react-icons/io5";
import "./styles.scss";
import CustomLink from "../CustomLink";

const Home = () => {
  return (
    <div className="home-container">
      <h1>WEATHER</h1>
      <h3>select a city</h3>
      <IoEarthOutline className="earth-icon" size={110} fontWeight={100} />
      <ul data-testid="links-list">
        <li>
          <CustomLink to={"Dallol"} />
        </li>
        <li>
          <CustomLink to={"Fairbanks"} />
        </li>
        <li>
          <CustomLink to={"London"} />
        </li>
        <li>
          <CustomLink to={"Recife"} />
        </li>
        <li>
          <CustomLink to={"Vancouver"} />
        </li>
        <li>
          <CustomLink to={"Yakutsk"} />
        </li>
      </ul>
    </div>
  );
};

export default Home;
