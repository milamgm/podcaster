import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { renderComponent } from "../../../common/helpers/__mocks__/appcontext.mock";
import Home from "../Home";

beforeEach(() => {
  renderComponent(<Home />);
});

it("showld render SearchField component", () => {
  const input = screen.getByPlaceholderText("Filter podcasts...");
  expect(input).toBeInTheDocument();
});

it("showld render podcasts", () => {
  const podcast = screen.getByText(/the lord of the rings/i);
  expect(podcast).toBeInTheDocument();
});

it("should display filtered podcasts", () => {
  const input = screen.getByPlaceholderText("Filter podcasts...");

  act(() => {
    input.value = "The Hobbit";
  });
  const podcast = screen.getByText(/the hobbit/i);
  expect(podcast).toBeInTheDocument();
});
