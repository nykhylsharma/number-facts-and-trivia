import 'tachyons';

export default function NumberSearch({getNumberFn, enterButtonFn, fetchTriviaAndMathsFactsFn}) {
  return (
    <div>
      <input
        name="numberInput"
        type="number"
        placeholder="Enter a number"
        min={0}
        onChange={getNumberFn}
        onKeyDown={enterButtonFn}
        required
      ></input>
      <button onClick={fetchTriviaAndMathsFactsFn}>Fetch a Trivia</button>
    </div>
  );
}
