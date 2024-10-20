import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const CVMain = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default CVMain;
