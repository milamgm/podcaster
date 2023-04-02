import { renderComponent } from "../../../common/helpers/__mocks__/appcontext.mock";
import Podcast from "../Podcast";
import { screen } from "@testing-library/react";

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useParams: () => ({
      podcastId: "1",
    }),
  };
});

it("should render the ExtendedCard component for selected Podcast", () => {
  renderComponent(<Podcast />);
  const extendedCard = screen.getByText(/the lord of the rings/i);
  expect(extendedCard).toBeInTheDocument();
});