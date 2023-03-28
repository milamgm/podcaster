import "../common/styles/App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Episodes, Home, Layout, Podcast } from "../common/utilities";
import Episode from "../pages/Podcast/Outlet/Episode";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/podcast/:podcastId" element={<Podcast />}>
            <Route index path="*" element={<Episodes />} />
            <Route path="episode/:episodeId" element={<Episode />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
