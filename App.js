import AppNavigator from "./pages/appNavigator";
import store from "./store";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
