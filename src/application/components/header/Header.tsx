import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="logo" onClick={handleClick}>
        <h4 className="logo_text">Podcaster</h4>
      </div>
    </div>
  );
};

export default Header;
