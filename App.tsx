const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import CreatePlan from "./screens/CreatePlan";
import TrainingLevel from "./screens/TrainingLevel";

import SelectWeight from "./screens/SelectWeight";
import SelectHeight from "./screens/SelectHeight";
import Birthday from "./screens/Birthday";
import Goal from "./screens/Goal";
import Gender from "./screens/Gender";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding from "./screens/Onboarding";

import SingIn from "./screens/SingIn";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";

import ALaunch from "./screens/ALaunch";
import ExerciseDetails from "./screens/ExerciseDetails";
import ExerciseInfo from "./screens/ExerciseInfo";

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
import Navigations from "./components/Navigation";
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
      },
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

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
                name="CreatePlan"
                component={CreatePlan}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrainingLevel"
                component={TrainingLevel}
                options={{ headerShown: false }}
              />
              <Stack.Screen

                name="SelectWeight"
                component={SelectWeight}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectHeight"
                component={SelectHeight}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Birthday"
                component={Birthday}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Goal"
                component={Goal}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Gender"
                component={Gender}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding1"
                component={Onboarding1}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SingIn"
                component={SingIn}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Welcome"
                component={Welcome}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ALaunch"
                component={ALaunch}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ExerciseDetails"
                component={ExerciseDetails}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ExerciseInfo"
                component={ExerciseInfo}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActivityActive"
                component={ActivityActive}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeActive"
                component={HomeActive}
                options={{ headerShown: false }}
              />
              <Stack.Screen

                name="Workouts"
                component={Workouts}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyWorkout"
                component={MyWorkout}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileActive"
                component={ProfileActive}

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
