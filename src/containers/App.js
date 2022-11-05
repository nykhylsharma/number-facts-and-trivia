import NumberTrivia from "../components/NumberTrivia";
import DateTrivia from "../components/DateTrivia";
import "tachyons";

function App() {
  return (
    <div>
      <h1 className="tc">Numbers Fun</h1>
        <div className="flex justify-around">
          <NumberTrivia className="outline w-40 pa3 mr2"/>
          <DateTrivia className="outline w-40 pa3 mr2"/>
        </div>
      </div>
  );
}

export default App;
