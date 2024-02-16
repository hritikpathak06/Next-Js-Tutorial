import style from "../style.module.css";

const page = () => {
  let color = "red";

  return (
    <div>
      <h1 className={color === "red" ? style.red : style.green}>
        Main Heading
      </h1>
      <h2 style={{ background: color === "red" ? "red" : "green" }}>
        Sub Heading
      </h2>
      <h3 id={style.orange}>Small Heading</h3>
      <h4>Mini Heading</h4>
    </div>
  );
};

export default page;
