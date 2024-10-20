import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const UniMain = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default UniMain;
