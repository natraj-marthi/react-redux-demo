export default function Child({ salary }) {
  console.log("did render child2?");
  return (
    <div>
      <h1 style={{ color: salary > 10 ? "red" : "green" }}>{salary}</h1>
    </div>
  );
}
