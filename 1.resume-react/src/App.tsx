import Counter from "./bases/Counter";
import CounterWithReducer from "./bases/CounterWithReducer";

function App() {
  return (
    <div>
      <div className="first">
        {/* <Counter />*/}
        <CounterWithReducer />
      </div>
    </div>
  );
}

export default App;
