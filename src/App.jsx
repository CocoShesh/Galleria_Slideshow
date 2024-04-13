import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import GalleryDetails from "./pages/GalleryDetails/GalleryDetails";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
      </Routes>
    </>
  );
}

export default App;
