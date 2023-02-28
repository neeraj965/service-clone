import "./Popular.css";
export default function () {
  return (
    <div>
      <div className="popular"></div>
      <div
        style={{
          position: "absolute",
          margin: "-3.4rem 35rem",
          fontSize: "2.2rem",
          fontWeight: "600",
          color: "teal",
        }}
      >
        Popular Service Products
      </div>
      <div
        style={{
          margin: "2.5rem 40rem",
          fontSize: "2.8rem",
          fontWeight: "600",
          opacity: "0.5",
        }}
      >
        Consultancy
      </div>
      <div
        style={{
          position: "absolute",
          margin: "-2rem 22rem",
          height: "0.1rem",
          width: "50rem",
          backgroundColor: "black",
          opacity: "0.5",
        }}
      ></div>
    </div>
  );
}
