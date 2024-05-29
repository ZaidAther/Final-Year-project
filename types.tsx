export type RootStackParamList = {
  Goal: { 
    gender: string;
    weight: number;
    height: number;
    age: number;
  };
  Gender: {
    weight: number;
    height: number;
    age: number;
    gender: string;
  };
  MuscleGroupsInput: { 
    height: number;
    age: number;
    gender: string;
    fitness_goal: string;
    weight: number;
  };
  WorkoutIntensityInput: {
    weight: number;
    height: number;
    age: number;
    gender: string;
    fitness_goal: string;
    muscle_groups: string[];
  };
  ActivityLevelInput: {
    weight: number;
    height: number;
    age: number;
    gender: string;
    fitness_goal: string;
    muscle_groups: string[];
    workout_intensity: string;
  };
  // Nutrition: { 
  //   weight: number;
  //   height: number;
  //   age: number;
  //   gender: string;
  //   fitness_goal: string;
  //   muscle_groups: string[];
  //   workout_intensity: string;
  //   clusterId: number;
  //   activity_level: string;
  // };
  HeightInputScreen: { 
    weight: number;
    height: number;
    age: number;
    gender: string;
  };
  WeightInputScreen: { 
    weight: number;
    height: number;
    age: number;
    gender: string;
  };
  AgeInputScreen: { 
    weight: number;
    height: number;
    age: number;
    gender: string;
  };
  WorkoutPlan: any; 
// Define the appropriate params type for WorkoutPlan
  HomeActive: any; // Define the appropriate params type for WorkoutPlan
  ExerciseInfo: {
    exerciseDetails: {
      Exercise_Name: string;
      Description: string;
      Equipment: string;
      Rating: number;
      Exercise_Video: string;
    };
    muscleGroup: string;
    day: string;
  };
  Nutrition: {
    weight: number;
    height: number;
    age: number;
    gender: string;
    fitness_goal: string;
    muscle_groups: string[];
    workout_intensity: string;
    clusterId: number;
    activity_level: string;
    mealPlan: {
      [day: string]: {
        [mealTime: string]: {
          name: string;
          calories: number;
          carbohydrate: number;
          fat: number;
          protein: number;
          image: string;
        };
      };
    }
};
  ActivityActive: { 
    weight: number;
    height: number;
    age: number;
    gender: string;
    fitness_goal: string;
    muscle_groups: string[];
    workout_intensity: string;
    clusterId: number;
    activity_level: string;
    mealPlan: {
    [day: string]: {
      [mealTime: string]: {
        name: string;
        calories: number;
        carbohydrate: number;
        fat: number;
        protein: number;
        image: string;
      };
    };
  }};
  Workouts: undefined;
  ProfileActive: undefined;
};
