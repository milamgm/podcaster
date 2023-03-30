import spinnerSVG from "../../../../public/spinner.svg";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinnerSVG} alt="" />
    </div>
  );
};

export default Spinner;
