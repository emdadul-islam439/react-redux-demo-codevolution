import "./App.css";
import { Provider } from "react-redux";

import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./redux/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
