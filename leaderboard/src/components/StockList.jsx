import React from "react";
import "./StockList.css";  // ✅ Make sure you have the CSS file

const StockList = ({ stocks }) => {
  return (
    <div className="stock-list">
      <h2>Best Stock Rankings</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Recommended Buy Price</th>
            <th>Score (1-10)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{stock.country === "India" ? "🇮🇳 India" : "🇺🇸 US"}</td>
              <td>{stock.symbol}</td>
              <td>{stock.current_price ? `₹${stock.current_price.toFixed(2)}` : "N/A"}</td>
              <td>{stock.recommended_buy_price ? `₹${stock.recommended_buy_price.toFixed(2)}` : "N/A"}</td>
              <td>{stock.score ? stock.score.toFixed(1) : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
