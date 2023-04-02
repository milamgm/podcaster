import { setupServer } from "msw/node";
import { rest } from "msw";
import podcastsFetchResponse from "../../__mocks__/podcastsFetchResponse.mock";

import handlers from "./handlers";

export const startServer = () => {
  const server = setupServer(
    rest.get(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
      (req, res, ctx) => {
        return res(ctx.json(podcastsFetchResponse));
      }
    )
  );

  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};
