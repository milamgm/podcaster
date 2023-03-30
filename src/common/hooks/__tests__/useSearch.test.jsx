import { renderHook } from "@testing-library/react";
import useSearch from "../useSearch";
import { AppProvider } from "../../utilities";
import {mockPodcasts} from "../../helpers/__mocks__/podcasts.mock"


const contextMock = {
  wrapper: ({ children }) => (
    <AppProvider value={{ podcastsFetch: mockPodcasts }}>
      {children}
    </AppProvider>
  ),
};

describe("useSearch", () => {
  it("returns an empty array if no podcasts match the search query", () => {
    const { result } = renderHook(() => useSearch("non-existing"), contextMock);

    expect(result.current).toEqual([]);
  });

  it("should return matching results based on query", () => {
    const { result, rerender } = renderHook((props) => useSearch(props.query), {
      wrapper: contextMock.wrapper,
      initialProps: { query: "" },
    });

    expect(result.current).toEqual(mockPodcasts);

    rerender({ query: "podcast 1" });
    expect(result.current).toEqual([mockPodcasts[0]]);

    rerender({ query: "author 2" });
    expect(result.current).toEqual([mockPodcasts[1]]);

    rerender({ query: "description" });
    expect(result.current).toEqual(mockPodcasts);
  });
});
