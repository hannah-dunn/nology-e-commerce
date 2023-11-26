import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import NavBar from "./components/NavBar/NavBar";
import BagContextProvider from "./context/BagContextProvider";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <CartContextProvider>
        <BagContextProvider>
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </BagContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
