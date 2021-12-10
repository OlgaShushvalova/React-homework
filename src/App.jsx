import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./Router";
import { persistor, store } from "./Store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
