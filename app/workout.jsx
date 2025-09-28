import { StyleSheet, Text, Button, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';

const Calendar = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCreateWorkoutPlan = () => {
    // Logic for creating a workout plan
  };

  const handleEnterNewExercise = () => {
    // Logic for entering a new exercise
  };

  return (
    <SafeAreaView style={styles.container}>
        <Button disabled={buttonDisabled} title="Create a workout plan" onPress={handleCreateWorkoutPlan} />
        <Button title="Enter a new exercise" onPress={handleEnterNewExercise} />
        <View>
            <Text>Workout plans:</Text>
        </View>
        <View>
            <Text>Exercises:</Text>
        </View>
    </SafeAreaView>
  )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})