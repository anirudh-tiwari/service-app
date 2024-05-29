import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from "./pages/appNavigator";
import store from "./store";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
}
