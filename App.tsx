const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ActivityActive from "./screens/ActivityActive";
import Nutrition from "./screens/Nutrition";
import FoodDetails from "./screens/FoodDetails";
import Status1 from "./components/Status1";
import Scroll1 from "./components/Scroll1";
import Scroll2 from "./components/Scroll2";
import HomeActive from "./screens/HomeActive";
import Workouts from "./screens/Workouts";
import ProfileActive from "./screens/ProfileActive";
import ExerciseInfo from "./screens/ExerciseInfo";
import Onboarding from "./screens/Onboarding";
import ExerciseDetails from "./screens/ExerciseDetails";
import Gender from "./screens/Gender";
import MyWorkout from "./screens/MyWorkout";
import Goal from "./screens/Goal";
import Birthday from "./screens/Birthday";
import SelectHeight from "./screens/SelectHeight";
import SelectWeight from "./screens/SelectWeight";
import TrainingLevel from "./screens/TrainingLevel";
import CreatePlan from "./screens/CreatePlan";
import ALaunch from "./screens/ALaunch";
import Welcome from "./screens/Welcome";
import Intensity from "./screens/WorkoutIntensityInputScreen";
import MuscleGroupsInput from "./screens/MuscleGroupsInputScreen";
import SignUp from "./screens/SignUp";
import SingIn from "./screens/SingIn";
import Onboarding1 from "./screens/Onboarding1";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { LogBox } from "react-native";
import MuscleGroupsInputScreen from "./screens/MuscleGroupsInputScreen";
import Goals from "./components/Goals";
import ActivityLevelInputScreen from "./screens/ActivityLevelInputScreen";
import ResultScreen from "./screens/ResultScreen";
import WeightInputScreen from "./screens/WeightInputScreen";
import HeightInputScreen from "./screens/HeightInputScreen";
import AgeInputScreen from "./screens/AgeInputScreen";
import WorkoutPlanScreen from "./screens/WorkoutPlanScreen";

LogBox.ignoreLogs(["fontFamily"]);

const App: React.FC = () => {
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

      <GestureHandlerRootView style={{ flex: 1 }}>
        <IconRegistry icons={[MaterialIconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="ActivityActive"
                  component={ActivityActive}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Nutrition"
                  component={Nutrition as React.ComponentType<any>}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WorkoutIntensityInput"
                  component={Intensity}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FoodDetails"
                  component={FoodDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeActive"
                  component={HomeActive}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Workouts"
                  component={Workouts as React.ComponentType<any>}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProfileActive"
                  component={ProfileActive}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ExerciseInfo"
                  component={ExerciseInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Onboarding"
                  component={Onboarding}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ExerciseDetails"
                  component={ExerciseDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Gender"
                  component={Gender}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MyWorkout"
                  component={MyWorkout}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Goal"
                  component={Goal}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MuscleGroupsInput"
                  component={MuscleGroupsInput}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ResultScreen"
                  component={ResultScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WeightInputScreen"
                  component={WeightInputScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HeightInputScreen"
                  component={HeightInputScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AgeInputScreen"
                  component={AgeInputScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WorkoutPlan"
                  component={WorkoutPlanScreen}
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
                  name="ActivityLevelInput"
                  component={ActivityLevelInputScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreatePlan"
                  component={CreatePlan}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ALaunch"
                  component={ALaunch}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Welcome"
                  component={Welcome}
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
                  name="Onboarding1"
                  component={Onboarding1}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : (
              <ALaunch />
            )}
          </NavigationContainer>
        </ApplicationProvider>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
