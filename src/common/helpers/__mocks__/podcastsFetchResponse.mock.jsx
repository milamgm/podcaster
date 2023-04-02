const podcastsFetchResponse = {
  feed: {
    entry: [

      {
        id: { attributes: { ["im:id"]: "1" } },
        title: { label: "Tutti Frutti" },
        ["im:artist"]: { label: "Elvis Presley" },
        ["im:image"]: [{ label: "elvis.png" }, { label: "elvis2.png" }],
        summary: { label: "Lorem ipsum rock and roll" },
      },
      {
        id: { attributes: { ["im:id"]: "2" } },
        title: { label: "Mamma Mia" },
        ["im:artist"]: { label: "ABBA" },
        ["im:image"]: [{ label: "abba.png" }, { label: "abba2.png" }],
        summary: { label: "Lorem ipsum chiquitita" },
      }
    ],
  },
};

export default podcastsFetchResponse;
