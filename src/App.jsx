import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsTable from "./components/ProductsTable";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/api/search");

      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar title={"Cuponatic"}/>
      <ProductsTable title={"Listado de Productos"} products={products} />
    </div>
  );
}

export default App;
