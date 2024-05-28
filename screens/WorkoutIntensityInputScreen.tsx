import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Pressable, Text } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ChooseLevel from '../components/ChooseLevel';
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles';
import Navigations from '../components/Navigation'; // Import Navigations component
import { RootStackParamList } from "../types";
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
          step2Of5="Step 7 of 8"
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
          Choose Workout Intensity
        </Text>
        <View style={[styles.levels, styles.levelsFlexBox]}>
          <ChooseLevel
            title="LIGHT"
            txt="Light workout intensity"
            propBorderColor={selectedIntensity === 'Light' ? '#2f548d' : '#fff'}
            onPress={() => setSelectedIntensity('Light')}
            isSelected={selectedIntensity === "Light"}
          />
          <ChooseLevel
            title="MODERATE"
            txt="Moderate workout intensity"
            propBorderColor={selectedIntensity === 'Moderate' ? '#2f548d' : '#fff'}
            onPress={() => setSelectedIntensity('Moderate')}
            isSelected={selectedIntensity === "Moderate"}
          />
          <ChooseLevel
            title="INTENSE"
            txt="Intense workout intensity"
            propBorderColor={selectedIntensity === 'Intense' ? '#2f548d' : '#fff'}
            onPress={() => setSelectedIntensity('Intense')}
            isSelected={selectedIntensity === "Intense"}
          />
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
    fontWeight: '500',
    fontFamily: FontFamily.poppins,
    textAlign: 'center',
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    marginTop: 60,
  },
  levels: {
    marginTop: 60,
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
    width: '92.05%',
    right: '3.97%',
    bottom: 0,
    left: '3.97%',
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutIntensityInputScreen;
