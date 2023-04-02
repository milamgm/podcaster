import { rest } from "msw";
import podcastsFetchResponse from "../../__mocks__/podcastsFetchResponse.mock";

export const getPodcasts = () =>
  rest.get(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    (req, res, ctx) => {
      res(ctx.json(podcastsFetchResponse));
    }
  );

const handlers = [getPodcasts()];

export default handlers;
