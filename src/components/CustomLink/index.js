import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.scss";

const CustomLink = ({ to }) => {
  return (
    <>
      {to !== "/" ? (
        <Link className="link" to={`/${to}/climate-info`}>
          {to}
        </Link>
      ) : (
        <Link className="link" to={to}>
          <FiArrowLeft size={28} />
        </Link>
      )}
    </>
  );
};

export default CustomLink;
