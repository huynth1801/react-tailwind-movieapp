import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:category/search/:id" exact element={<Catalog />} />
      <Route path="/:category/:id" exact element={<Detail />} />
      <Route path="/:category" exact element={<Catalog />} />
    </Routes>
  );
};

export default Routers;
