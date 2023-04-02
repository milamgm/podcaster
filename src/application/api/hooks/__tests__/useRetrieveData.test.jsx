import { renderHook } from "@testing-library/react";
import useRetrieveData from "../useRetrieveData";
import podcastsFetch from "../../../../common/helpers/__mocks__/podcastsFetch.mock";
import { startServer } from "../../../../common/helpers/__mocks__/mock-server/index";

describe("useRetrieveData", () => {
  startServer();
  const storedApiDataMock = podcastsFetch;

  beforeEach(() => {
    localStorage.clear();
  });

  it("should render hook correctly", () => {
    const { result } = renderHook(() => useRetrieveData());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toEqual([]);
  });

  it("should fetch data from API and save it to localstorage it there is no stored data yet", async () => {
    const { result } = renderHook(() => useRetrieveData());

    expect(result.current.data.length).toBeGreaterThan(0);
    expect(localStorage.getItem("apiData")).not.toBeNull();
  });

  it("should get data from localstorage if there is stored data and a day has not passed", async () => {
    localStorage.setItem("apiData", JSON.stringify(storedApiDataMock));
    localStorage.setItem("lastFetch", Date.now());

    const { result } = renderHook(() => useRetrieveData());

    expect(result.current.data).toEqual(storedApiDataMock);
  });

  it("should refetch data if one day has passed", async () => {
    localStorage.setItem("apiData", JSON.stringify(storedApiDataMock));
    localStorage.setItem("lastFetch", Date.now() - 86400001);

    const { result } = renderHook(() => useRetrieveData());

    expect(result.current.data).not.toEqual(storedApiDataMock);
    expect(localStorage.getItem("apiData")).not.toBeNull();
  });
});
