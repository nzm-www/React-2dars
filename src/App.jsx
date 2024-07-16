import Card from "./assets/Components/Card";
import "./index.css";
import data from "./assets/data.json";
function App() {
  console.log(data);
  return (
    <>
      {data.length &&
        data.map((el, index) => {
          return <Card key={index} data={el}></Card>;
        })}
    </>
  );
}

export default App;
