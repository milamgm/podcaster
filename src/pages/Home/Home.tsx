import { useAppContext } from "../../application/context/AppContext";
import { ItemCard, SearchField } from "../../common/utilities";
import "./Home.scss";

const Home = () => {
  const { displayPodcasts } = useAppContext();

  return (
    <div className="home">
      <div className="top_bar">
        <SearchField />
      </div>
      <div className="items_list">
        {displayPodcasts &&
          displayPodcasts.map((podcast) => (
            <ItemCard
              key={podcast?.id.attributes["im:id"]}
              id={podcast?.id.attributes["im:id"]}
              title={podcast?.title.label}
              author={podcast["im:artist"]?.label}
              image={podcast["im:image"][1]?.label}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
