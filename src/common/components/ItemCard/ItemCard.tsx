import { useNavigate, Link } from "react-router-dom";
import "./ItemCard.scss";

interface Props {
  id: number;
  title: string;
  author: string;
  image: string;
}

const ItemCard = ({ id, title, author, image }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/podcast/${id}`);
  };
  return (
    <Link className="item_card" to={`/podcast/${id}`}>
      <div className="background">
        <div className="content">
          <img className="thumbnail" src={image} alt="" />
          <div className="text">
            <h4 className="title">{title}</h4>
            <p className="description">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
