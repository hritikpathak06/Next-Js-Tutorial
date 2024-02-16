"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [bg, setBg] = useState({ color: "blue" });

  // Use Effect Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Product List</h1>
        {products.map((item, idx) => (
          <div key={idx}>
            <h1 style={bg}>{item.title}</h1>
            <p>Price:{item.price}</p>
            <Image src={item.images[0]} height={300} width={300} alt={item.title} />
            <button onClick={() => setBg({ color: "green" })}>
              Update Style
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
