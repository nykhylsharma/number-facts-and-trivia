import NumberTrivia from "../components/NumberTrivia";
import DateTrivia from "../components/DateTrivia";
import "tachyons";

function App() {
  return (
    <>
      <h1 className="tc">Numbers Fun</h1>
        <div className="flex flex-wrap justify-around">
          <NumberTrivia className="outline w-40 pa3 mr3"/>
          <DateTrivia className="outline w-40 pa3 mr3"/>
        </div>
      </>
  );
}

export default App;
