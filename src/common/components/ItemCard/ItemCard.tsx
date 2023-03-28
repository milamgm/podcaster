import "./ItemCard.scss";

interface Props {
  id: number;
  title: string;
  author: string;
  image: string;
}

const ItemCard = ({ title, author, image }: Props) => {
  return (
    <div className="item_card">
      <div className="background">
        <div className="content">
          <img className="thumbnail" src={image} alt="" />
          <div className="text">
            <h4 className="title">{title}</h4>
            <p className="description">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
