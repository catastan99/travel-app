import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EntryScreen from "./screens/EntryScreen";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import LocationScreen from "./screens/LocationScreen";
import colors from "./style/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonstLoaded] = useFonts({
    rubik: require("./assets/fonts/RubikDirt-Regular.ttf"),
  });

  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LogIn"
            component={EntryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LocationScreen"
            component={LocationScreen}
            options={{
              headerShown: true,
              headerBackVisible: true,
              headerBackButtonMenuEnabled: true,
              headerTransparent: true,
              headerTitle: "",
              headerTintColor: colors.yellow,
              
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
