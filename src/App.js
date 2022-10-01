import { Navbar, Footer } from "./components";
import {
  Home,
  Auth,
  ProductPage,
  ProductCategory,
  ProductDetails,
  Profile,
} from "./Pages";

import ProductDesc from "./Pages/ProductDesc/ProductDesc";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<SignIn />} /> */}
          <Route element={<Auth />}>
            <Route path="/login" />
            <Route path="/register" />
          </Route>
          {["/login", "/register"].map((path) => (
            <Route path={path} element={<Auth />} key={path} />
          ))}
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/productDesc/:Desc" element={<ProductDesc />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
