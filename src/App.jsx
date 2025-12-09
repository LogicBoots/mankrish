import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import ProductDetail from "./pages/ProductDetail";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
