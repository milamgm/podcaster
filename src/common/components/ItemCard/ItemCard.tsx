import "./ItemCard.scss";
const ItemCard = () => {
  return (
    <div className="item_card">
      <div className="background">
        <div className="content">
          <img
            className="thumbnail"
            src="https://cdn.pixabay.com/photo/2017/01/17/14/44/pixabay-1987090_1280.png"
            alt=""
          />
          <div className="text">
            <h4 className="title">All songs considered</h4>
            <p className="description">Author: NPR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
