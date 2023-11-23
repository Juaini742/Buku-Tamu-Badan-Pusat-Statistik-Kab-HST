import RootRoutes from "./Routes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RootRoutes />;
    </Provider>
  );
}

export default App;




