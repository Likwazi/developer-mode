import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";

const Home = () => {
  const [items, setItems] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setItems(data.data);
  }, [data]);

  console.log(items);
  return (
    <div>
      <Banner />
      <Products items={items} />
    </div>
  );
};

export default Home;
