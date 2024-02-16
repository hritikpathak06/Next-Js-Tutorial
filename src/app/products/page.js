import Product from "../productlist/product";
import styles from "../custom.module.css";
import Image from "next/image";

// Server Side Data Fetching
async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const page = async () => {
  let products = await productList();
  // console.log(products)
  return (
    <div>
      <h1>Server Fetching Products</h1>
      {products.map((item, idx) => (
        <div key={idx}>
          <h3 className={styles.main}>Title:{item.title}</h3>
          <h3 className="main">Price:{item.price}</h3>
          <Image src={item.images[0]} height={300} width={300} alt={item.title} />
          <Product item={item} />
        </div>
      ))}
    </div>
  );
};

export default page;
