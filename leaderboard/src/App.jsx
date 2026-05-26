import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import StockList from "./components/StockList";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("https://backend-8o52.onrender.com/stocks");
        console.log("Fetched data:", response.data);  // ✅ Debugging line
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
        setError("Failed to load stocks. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) return <p>Loading stocks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>smart invest</h1>
      <StockList stocks={stocks} />
    </div>
  );
};

export default App;
