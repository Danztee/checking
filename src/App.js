import { Navbar, Footer } from "./components";
import { Home, Auth } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const pathName = window.location.pathname;
  console.log(pathName);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="">
          {pathName !== "/login" && pathName !== "/register" ? (
            <Navbar />
          ) : null}
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
          </Routes>
          {pathName !== "/login" && pathName !== "/register" ? (
            <Footer />
          ) : null}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
