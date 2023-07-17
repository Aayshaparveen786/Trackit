import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Statistic from "../component/Statistic";
import Add from "../component/Add";
import Category from "../component/Category";
import EditUser from "../component/EditUser";
// import Navbar from "../component/Navbar";
const MainFram = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Statistic" element={<Statistic />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/EditUser" element={<EditUser />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
      {/* <Navbar /> */}
    </>
  );
};

export default MainFram;
