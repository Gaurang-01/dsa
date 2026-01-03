import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Marketplace from "./pages/Marketplace/Marketplace";
import UploadMaterial from "./pages/UploadMaterial/UploadMaterial";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/upload" element={<UploadMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
