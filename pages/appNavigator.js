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
import Health from "../pages/health";
import FoodList from "../pages/food/list";
import SingleMenu from "../pages/food/single";
import Success from "../pages/food/success";
import Doctor from "../pages/health/doctor";
import HealthProduct from "../pages/health/products/list";
import SingleDoctor from "../pages/health/singleDoctor";
import Appointment from "../pages/health/appointment";
import Security from "../pages/security";
import AddContacts from "../pages/security/create/add-contacts";
import Recognition from "../pages/security/create/recognition";
import Safety from "../pages/security/create/safety";
import Locality from "../pages/locality";
import CreateIssue from '../pages/locality/create';
import Discussion from '../pages/locality/discussion';

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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Appointment"
          component={Appointment}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Security"
          component={Security}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AddContacts"
          component={AddContacts}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Recognition"
          component={Recognition}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Safety"
          component={Safety}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Locality"
          component={Locality}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CreateIssue"
          component={CreateIssue}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Discussion"
          component={Discussion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
