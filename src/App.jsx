import Content from "./content";
import "./App.css";

function App() {
  const heading = {
    topic: "Wedding Reception",
    invite:
      "We invite your plesure to come to the wedding recption ceremony of",
    name1: "ADELINE",
    and: "&",
    name2: "ALEXGENDER",
    day: "Saturday",
    date: "26 January",
    time: "At 10 am",
    palace: "Smart Venue",
  };
  return (
    <div>
      <Content heading={heading} />
    </div>
  );
}

export default App;
