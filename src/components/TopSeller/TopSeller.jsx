import React from "react";
import TopSellerCard from "./TopSellerCard";

import { topSellersData } from "../../data";
import "./Topseller.scss";

const TopSeller = () => {
  return (
    <div>
      <h1 className="header">Top sellers of the month</h1>
      <div className="flex flex-wrap mt-16">
        {topSellersData.map((seller, index) => (
          <TopSellerCard key={index} {...seller} />
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
