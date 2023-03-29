import { createContext, useContext, useState, useEffect } from "react";
import { IAppContext } from "../../common/types";
import { useRetrieveData } from "../../common/utilities/";

interface Props {
  children: JSX.Element;
}

const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }: Props) => {
  const {data, isLoading} = useRetrieveData();
  const [podcastsFetch, setPodcastsFetch] = useState([]);
  const [displayPodcasts, setDisplayPodcasts] = useState([]);
  const values = { podcastsFetch, displayPodcasts, setDisplayPodcasts, isLoading };

  useEffect(() => {
    if (!isLoading) {
      setPodcastsFetch(data);
      setDisplayPodcasts(data);
    }
  }, [data, isLoading]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
