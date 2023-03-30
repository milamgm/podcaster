import { useEffect, useState } from "react";
import { useAppContext } from "../../../application/context/AppContext";
import { IPodcast } from "../../types";
import LinkToPodcast from "./components/LinkToPodcast";
import "./ExtendedItemCard.scss";

interface Props {
  podcastId: string | undefined;
}
const ExtendedItemCard = ({ podcastId }: Props) => {
  const { podcastsFetch } = useAppContext();
  const [selectedPodcast, setSelectedPodcast] = useState<IPodcast | null>(null);

  useEffect(() => {
    // Takes the corresponding podcast from array
    if (podcastsFetch.length >= 1) {
      const filteredPodcast = podcastsFetch?.filter(
        (entry: IPodcast) => entry.id == Number(podcastId)
      )[0];
      setSelectedPodcast(filteredPodcast);
    }
  }, [podcastsFetch]);

  return (
    <>
      {selectedPodcast && (
        <div className="extended_item_card">
          <LinkToPodcast>
            <div className="img_wrapper">
              <img src={selectedPodcast?.image} alt="" />
            </div>
          </LinkToPodcast>
          <hr />
          <div className="main_info">
            <LinkToPodcast>
              <h3 className="title">{selectedPodcast?.title}</h3>
            </LinkToPodcast>
            <LinkToPodcast>
              <h4 className="subtitle">{selectedPodcast?.author}</h4>
            </LinkToPodcast>
          </div>
          <hr />
          <div className="description">
            <h4 className="title">Description:</h4>
            <p>{selectedPodcast?.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExtendedItemCard;
