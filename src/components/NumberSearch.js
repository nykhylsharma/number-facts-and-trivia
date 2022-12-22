import 'tachyons';

export default function NumberSearch({getNumberFn, buttonEventFn}) {
  return (
    <div className='center'>
      <input
        name="numberInput"
        type="number"
        placeholder="Enter a number"
        min={0}
        onChange={getNumberFn}
        onKeyDown={buttonEventFn}
        required
      ></input>
      <button onClick={(event) => {buttonEventFn(event)}}>Fetch a Trivia</button>
    </div>
  );
}
