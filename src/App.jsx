import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Marketplace from "./pages/Marketplace/Marketplace";
import UploadMaterial from "./pages/UploadMaterial/UploadMaterial";
import Impact from "./pages/Impact/Impact";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/upload" element={<UploadMaterial />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
