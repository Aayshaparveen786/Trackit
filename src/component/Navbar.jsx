/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PieChartIcon from "@mui/icons-material/PieChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-links">
        <HomeIcon />
        Home
      </NavLink>
      <NavLink to="/Statistic" className="nav-links">
        <PieChartIcon />
        Statistic
      </NavLink>
      <NavLink to="/Add" className="nav-links">
        <AddBoxIcon />
        Add
      </NavLink>
      <NavLink to="/Category" className="nav-links">
        <CategoryIcon />
        Category
      </NavLink>
    </div>
  );
};

export default Navbar;
