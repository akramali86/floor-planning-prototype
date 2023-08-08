import { CircleTable } from "./CircleTable";

function App() {
  return (
    <>
      <CircleTable seats={2} top={100} left={100} rotation={90} />
      <CircleTable seats={3} top={100} left={300} rotation={15} />
      <CircleTable seats={4} top={100} left={500} rotation={30} />
    </>
  );
}

export default App;
