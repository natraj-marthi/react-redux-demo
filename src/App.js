import "./styles.css";
import { useState } from "react";
import Child from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

export default function App() {
  const [salary, setSalary] = useState(0);

  function handleHikeSalary(evt) {
    evt.preventDefault();
    setSalary(Number(evt.target.value));
  }
  return (
    <div className="App">
      <div>Salary: {salary}</div>
      <Child handleHikeSalary={handleHikeSalary} />
      <Child2 salary={salary} />
      <Child3 />
    </div>
  );
}
