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
import Health from '../pages/health'
import FoodList from '../pages/food/list';
import SingleMenu from '../pages/food/single';
import Success from '../pages/food/success';
import Doctor from '../pages/health/doctor';
import HealthProduct from '../pages/health/products/list';
import SingleDoctor from '../pages/health/singleDoctor';


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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="FoodList"
          component={FoodList}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SingleMenu"
          component={SingleMenu}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Success"
          component={Success}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Health"
          component={Health}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Doctor"
          component={Doctor}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HealthProduct"
          component={HealthProduct}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SingleDoctor"
          component={SingleDoctor}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
