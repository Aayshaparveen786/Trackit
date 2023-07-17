/* eslint-disable no-unused-vars */
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Home = () => {
  return (
    <div className="main-home-container">
      <div className="home-heading">Home</div>
      <div className="C-blance-box">
        <p className="Current-blance-text">Current Blance</p>
        <p className="Current-blance-price">
          <CurrencyRupeeIcon />
          0.00
        </p>
      </div>
      <div className="two-price-box">
        <div className="Income-box">
          <p className="Income-price">
            <CurrencyRupeeIcon />
            0.00
          </p>
          <p className="Income-text">Income</p>
        </div>
        <div className="Expense-box">
          <p className="Expense-price">
            <CurrencyRupeeIcon />
            0.00
          </p>
          <p className="Expense-text">Expense</p>
        </div>
      </div>
      <hr />
      <div className="Transaction">
        <h2 className="T-heading">Your Transaction :</h2>
        <div className="T-deatils">
          <div className="category-name">
            <span className="INC-name">food</span>
            <span className="INC-date">Date</span>
          </div>
          <div className="amount">
            <CurrencyRupeeIcon sx={{ marginTop: "1rem", fontSize: "1.5rem" }} />{" "}
            00.0
          </div>
          <hr />
          <div className="Notes-box">
            <p>Notes:</p>
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
