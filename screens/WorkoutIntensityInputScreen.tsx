import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Pressable, Text } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ChooseLevel from '../components/ChooseLevel';
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles';
import Navigations from '../components/Navigation'; // Import Navigations component
import { RootStackParamList } from "../types";
import { shadow } from 'react-native-paper';
// type RootStackParamList = {
//   WorkoutIntensityInput: undefined;
//   ActivityLevelInput: {
//     weight: number;
//     height: number;
//     age: number;
//     gender: string;
//     fitness_goal: string;
//     muscle_groups: string[];
//     workout_intensity: string;
//   };
// };

type WorkoutIntensityInputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'WorkoutIntensityInput'>;
  route: RouteProp<RootStackParamList, 'WorkoutIntensityInput'>;
};

const WorkoutIntensityInputScreen: React.FC<WorkoutIntensityInputScreenProps> = ({ navigation, route }) => {
  const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedIntensity) {
      navigation.navigate('ActivityLevelInput', {
        workout_intensity: selectedIntensity,
        ...route.params,
      });
    } else {
      console.log('Please select a workout intensity');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentScrollViewContent}
      >
        <Navigations
          step2Of5="Step 4 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <Text style={[styles.chooseGender]}>
          Workout Intensity
        </Text>
        <View style={[styles.levels, styles.levelsFlexBox]}>
          <View style={[styles.shadow]}>
          <ChooseLevel
            title="Light"
            txt="Light workout intensity"
            propBorderColor={selectedIntensity === 'Light' ? '#2f548d' : '#fff'}
            onPress={() => setSelectedIntensity('Light')}
            isSelected={selectedIntensity === "Light"}
          />
          </View>
          <View style={[styles.shadow]}>
          <ChooseLevel
            title="Moderate"
            txt="Moderate workout intensity"
            propBorderColor={selectedIntensity === 'Moderate' ? '#2f548d' : '#fff'}
            onPress={() => setSelectedIntensity('Moderate')}
            isSelected={selectedIntensity === "Moderate"}
          />
          </View>
          <View style={[styles.shadow]}>
          <ChooseLevel
            title="Intense"
            txt="Intense workout intensity"
            propBorderColor={selectedIntensity === 'Intense' ? '#2f548d' : '#fff'}
            onPress={() => setSelectedIntensity('Intense')}
            isSelected={selectedIntensity === "Intense"}
          />
          </View>
        </View>
      </ScrollView>
      <View style={styles.continue}>
        <Pressable
          style={[styles.button, styles.levelsFlexBox]}
          onPress={handleNext}
        >
          <Text style={[styles.startTraining]}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingTop: 50,
  },
  scrollContent: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 33,
    zIndex: 1,
  },
  scrollContentScrollViewContent: {
    paddingHorizontal: 10,
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  chooseGender: {
    fontWeight: '400',
    fontFamily: FontFamily.poppins,
    textAlign: 'center',
    fontSize: FontSize.size_mid,
    lineHeight: 32,
    color: Color.colorGray_200,
    marginTop: 50,
  },
  levels: {
    marginTop: 33,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelsFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
    textAlign: 'center',
    fontFamily: FontFamily.poppins,
    fontWeight: '500',
  },

  shadow:{
    width: "100%",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
  },
  button: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  continue: {
    paddingHorizontal: Padding.p_3xs,
    width: '100%',
    // right: '3.97%',
    bottom: 0,
    // left: '3.97%',
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutIntensityInputScreen;
