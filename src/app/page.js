import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import LOGO from "../../public/vercel.svg";
import {Roboto} from "next/font/google"

const roboto = Roboto({
  weight:'900',
  subsets:['latin'],
  display:"swap"
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={LOGO} alt="vercel" />
      {/* <h1 style={{fontFamily:"Roboto",fontWeight:900}}>Font With Link Tag</h1> */}
      <h1 className={roboto.className}>FonT with Nextjs Font Features</h1>
      <h1>Fetch Api</h1>
      <Link href={"/productlist"}>
        <h1>Product List</h1>
      </Link>
      <Link href={"/products"}>
        <h1>Server Fetch Products</h1>
      </Link>
      <Link href={"/user"}>
        <h1>User</h1>
      </Link>
      <Link href={"/styling"}>
        <h1>Styling With Css</h1>
      </Link>
    </main>
  );
}
