import "../common/styles/App.scss";
import { Routes, Route } from 'react-router-dom'
import { Header, Home } from "../common/utilities";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
