import { Navbar, Footer } from "./components";
import { Home, Auth, ProductPage } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

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
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
