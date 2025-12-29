import UserCardDComp from "./usercarddcomp";
import Props from "./props";

function App() {
  return (
    <>
      <UserCardDComp />
      <Props name="gracy" age={22} color="blue" />
    </>
  );
}

export default App;
