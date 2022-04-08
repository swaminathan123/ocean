import React from "react";
import "./App.css";
import { stockData } from "./stock";

export const Stocks = () => {
  const x = JSON.parse(stockData);

  return (
    <>
      <div className="stock-container">
        {x.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
      </div>
    </>
  );
};
