import { useEffect, useState } from "react";
import { useAppContext } from "../../../application/context/AppContext";
import LinkToPodcast from "./components/LinkToPodcast";
import "./ExtendedItemCard.scss";

interface Props {
  podcastId: string | undefined;
}
const ExtendedItemCard = ({ podcastId }: Props) => {
  const { podcastsFetch } = useAppContext();
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  useEffect(() => {
    if (podcastsFetch.length >= 1) {
      console.log(podcastsFetch);
      const filteredPodcast = podcastsFetch?.filter(
        (entry: any) => entry.id.attributes["im:id"] == podcastId
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
              <img src={selectedPodcast["im:image"][1]?.label} alt="" />
            </div>
          </LinkToPodcast>
          <hr />
          <div className="main_info">
            <LinkToPodcast>
              <h3 className="title">{selectedPodcast?.title.label}</h3>
            </LinkToPodcast>
            <LinkToPodcast>
              <h4 className="subtitle">
                {selectedPodcast["im:artist"]?.label}
              </h4>
            </LinkToPodcast>
          </div>
          <hr />
          <div className="description">
            <h4 className="title">Description:</h4>
            <p>{selectedPodcast?.summary.label}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExtendedItemCard;
