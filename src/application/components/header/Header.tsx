import { Link } from "react-router-dom";
import { Spinner } from "../../../common/utilities";
import { useAppContext } from "../../context/AppContext";
import "./Header.scss";

const Header = () => {
  const { loading } = useAppContext();

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <h4 className="logo_text">Podcaster</h4>
        </div>
      </Link>

      {loading && <Spinner />}
    </div>
  );
};

export default Header;
