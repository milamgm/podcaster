import { useAppContext } from "../../application/context/AppContext";
import { IPodcast } from "../../common/types";
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
          displayPodcasts.map((podcast : IPodcast) => (
            <ItemCard
              key={podcast?.id}
              id={podcast?.id}
              title={podcast?.title}
              author={podcast.author}
              image={podcast.image}
            />
          ))} 
      </div>
    </div>
  );
};

export default Home;
