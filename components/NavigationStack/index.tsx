import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme, View } from "react-native";
import HomeScreen from "../../screens/HomeScreen";

import LoginScreen from "../../screens/LoginScreen";
import EntryRequestsScreen from "../EntryRequestsScreen";
import InviteVisitorScreen from "../InviteVisitorScreen.tsx";
const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  },
};
export default function CustomNavigationStack() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Smentry Home"
          component={HomeScreen}
          options={{
            gestureEnabled: false,
            headerShown: true,
            header: () => <></>,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Enter Visitor Details"
          component={InviteVisitorScreen}
          options={{
            gestureEnabled: true,
            headerShown: true,
            header: () => <></>,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="EntryRequestsScreen"
          component={EntryRequestsScreen}
          options={{
            gestureEnabled: true,
            headerShown: true,
            header: () => <></>,
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
