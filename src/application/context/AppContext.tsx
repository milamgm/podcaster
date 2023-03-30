import { createContext, useContext, useState, useEffect } from "react";
import { IAppContext, IPodcast } from "../../common/types";
import { useRetrieveData, useRetrieveDetails } from "../../common/utilities/";

interface Props {
  children: JSX.Element;
}

const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: Props) => {
  const { data, isLoading } = useRetrieveData();
  const [podcastsFetch, setPodcastsFetch] = useState<IPodcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayPodcasts, setDisplayPodcasts] = useState<IPodcast[]>([]);
  const values = {
    podcastsFetch,
    displayPodcasts,
    setDisplayPodcasts,
    loading,
    setLoading,
  };

  useEffect(() => {
    if (!isLoading) {
      setPodcastsFetch(data);
      setDisplayPodcasts(data);
      setLoading(isLoading);
    }
  }, [data, isLoading]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
