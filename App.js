import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./components/Pages/loginPage";
import RegisterPage from "./components/Pages/registerPage";
import PortoPage from "./components/Pages/portoPage";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome To ArtzyApp">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#008000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#008000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Portfolio"
          component={PortoPage}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#555843",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
