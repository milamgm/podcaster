import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { AppContext } from "../../../application/context/AppContext";
import { startServer } from "./mock-server/index";
import podcastsFetch from "./podcastsFetch.mock";

const AppContextMock = ({ children}) => {
  startServer()
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          podcastsFetch: podcastsFetch,
          displayPodcasts: podcastsFetch,
          setDisplayPodcasts: vi.fn(),
          loading: false,
          setLoading: vi.fn(),
        }}
      >
        {children}
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export const renderComponent = (component) => render(
  <AppContextMock>{component}</AppContextMock>, { verbose: true }
);
