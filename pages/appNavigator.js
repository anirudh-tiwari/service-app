/**
 * External dependencies
 */
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * Internal dependencies
 */
import Splash from "../components/splash";
import Home from "../pages/home";
import Food from "../pages/food";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Food"
          component={Food}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;