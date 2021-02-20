export default function Child({ handleHikeSalary }) {
  console.log("did render child1?");
  return (
    <div>
      <input type="number" onChange={handleHikeSalary} />
    </div>
  );
}
