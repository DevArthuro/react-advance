import { MarketPlace } from "./components/MarketPlace";
import ObserverContextProvider from "./context/observer";
import Observer from "./observer/market";

function App() {
  const ObserverMarket = Observer({
    activeCarts: 0,
    subscribers: {},
  });
  return (
    <>
      <ObserverContextProvider value={{ observer: ObserverMarket }}>
        <MarketPlace />
      </ObserverContextProvider>
    </>
  );
}

export default App;
