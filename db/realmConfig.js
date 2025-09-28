import Realm from "realm";

// Define your schema
const WorkoutPlansSchema = {
  name: "WorkoutPlans",
  properties: {
    ID: "int",
    Name: "string",
    Description: "string?",
    CreatedAt: "date",
  },
  primaryKey: "ID"
};

const TrainingsSchema = {
  name: "Trainings",
  properties: {
    ID: "int",
    Name: "string",
    Description: "string?",
    WorkoutPlans: "WorkoutPlans", // Linking to WorkoutPlans
  },
  primaryKey: "ID",
};

const ExercisesSchema = {
  name: "Exercises",
  properties: {
    ID: "int",
    Name: "string",
    Description: "string?",
  },
  primaryKey: "ID"
};

const ExerciseMuscleGroupsSchema = {
  name: "ExerciseMuscleGroups",
  properties: {
    ID: "int",
    Exercise: "Exercises", // Linking to Exercises
    MuscleGroup: "MuscleGroups", // Linking to MuscleGroups
  },
  primaryKey: "ID"
};

const MuscleGroupsSchema = {
  name: "MuscleGroups",
  properties: {
    ID: "int",
    Name: "string",
    Description: "string?",
  },
  primaryKey: "ID"
};

const TrainingExercisesSchema = {
  name: "TrainingExercises",
  properties: {
    ID: "int",
    Order: "int",
    Sets: "int",
    RepsEstimate: "int?",
    WeightEstimate: "float?",
    RIR: "int",
    RPE: "int",
    Training: "Trainings", // Linking to Trainings
    Exercise: "Exercises", // Linking to Exercises
  },
  primaryKey: "ID"
};

const PerformanceLogsSchema = {
  name: "PerformanceLogs",
  properties: {
    ID: "int",
    SetNumber: "int",
    Weight: "float?",
    Reps: "int",
    RIR: "int?",
    RPE: "int?",
    Notes: "string?",
    CreatedAt: "date",
    Workout: "WorkoutPlans", // Linking to WorkoutPlans
    Training: "Trainings", // Linking to Trainings
    TrainingExercise: "TrainingExercises", // Linking to TrainingExercises
  },
  primaryKey: "ID"
};

export const realmConfig = {
  schema: [WorkoutPlansSchema, TrainingsSchema, ExercisesSchema, ExerciseMuscleGroupsSchema, MuscleGroupsSchema, TrainingExercisesSchema, PerformanceLogsSchema],
  schemaVersion: 1,
};