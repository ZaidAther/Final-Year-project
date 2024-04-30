const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import ProfileActive from "./screens/ProfileActive";
import ToggleMetric from "./components/ToggleMetric";
import AllGenders from "./components/AllGenders";
import Dates from "./components/Dates";
import MyWorkout from "./screens/MyWorkout";
import Inputs from "./components/Inputs";
import Workouts from "./screens/Workouts";
import NavBar from "./components/NavBar";
import HomeActive from "./screens/HomeActive";
import StatusBars from "./components/StatusBars";
import ActivityActive from "./screens/ActivityActive";
import Category from "./components/Category";
import ExerciseInfo from "./screens/ExerciseInfo";
import ExerciseDetails from "./screens/ExerciseDetails";
import Navigations from "./components/Navigation";
import ALaunch from "./screens/ALaunch";
import SignUp from "./screens/SignUp";
import SingIn from "./screens/SingIn";
import Onboarding from "./screens/Onboarding";
import Onboarding1 from "./screens/Onboarding1";
import Gender from "./screens/Gender";
import Goal from "./screens/Goal";
import Birthday from "./screens/Birthday";
import SelectHeight from "./screens/SelectHeight";
import SelectWeight from "./screens/SelectWeight";
import TrainingLevel from "./screens/TrainingLevel";
import CreatePlan from "./screens/CreatePlan";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileActive"
                component={ProfileActive}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyWorkout"
                component={MyWorkout}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Workouts"
                component={Workouts}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeActive"
                component={HomeActive}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActivityActive"
                component={ActivityActive}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ExerciseInfo"
                component={ExerciseInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ExerciseDetails"
                component={ExerciseDetails}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ALaunch"
                component={ALaunch}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding1"
                component={Onboarding1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Gender"
                component={Gender}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Goal"
                component={Goal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Birthday"
                component={Birthday}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectHeight"
                component={SelectHeight}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectWeight"
                component={SelectWeight}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrainingLevel"
                component={TrainingLevel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreatePlan"
                component={CreatePlan}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <ALaunch />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
