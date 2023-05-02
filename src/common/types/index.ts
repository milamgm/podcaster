export interface IAppContext {
  podcastsFetch: any;
  displayPodcasts: any;
  setDisplayPodcasts: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPodcast {
  id: number,
  title: string,
  author: string,
  image: string,
  description: string
}

export interface IStoredItem {
  detail: IEpisode[],
  lastFetch: number
}

export interface IEpisode {
  trackId: string,
  trackName: string,
  description:string,
  episodeUrl: string,
  trackTimeMillis: number,
  releaseDate: string,
}