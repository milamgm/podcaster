import "./ExtendedItemCard.scss";

const ExtendedItemCard = () => {
  
  return (
    <div className="extended_item_card">
      <div className="img_wrapper">
        <img
          src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <hr />
      <div className="main_info">
        <h3 className="title">Song Exploder</h3>
        <h4 className="subtitle">Mdi Sound</h4>
      </div>
      <hr />
      <div className="description">
        <h4 className="title">Description:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit
          amet aliquam in tenetur, quibusdam, expedita quasi ratione illum
          perferendis fugit mollitia magni dolores quas? Expedita, aut pariatur.
          Ad, enim.
        </p>
      </div>
    </div>
  );
};

export default ExtendedItemCard;
