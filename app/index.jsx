import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

// const CloseButton = ({ onPress, title }) => (
//   <TouchableOpacity onPress={onPress} style={buttonStyles.buttonContainer}>
//     <Text style={buttonStyles.buttonText}>{title}</Text>
//   </TouchableOpacity>
// );

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null); // date object
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDayPress = (day) => {
    setButtonDisabled(day.dateString !== '2025-09-16');
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Calendar
          style={styles.calendar}
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'blue' },
          }}
        />

        <Button 
          style={ styles.button} 
          title='Create a recurring workout' 
          onPress={() => {}}
          color={ 'red' }
        />
        <Button style={ styles.button} title='Start a quick workout' onPress={() => {}} />

        <Modal
          visible={modalVisible}
          animationType="none"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{selectedDate}</Text>
              <Button style={ styles.button} disabled={buttonDisabled} title="Quick workout" onPress={() => {}} />
              <Button style={ styles.button} title="Schedule a workout" onPress={() => {}} />
              <Button style={styles.closeButton} title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    calendar: {
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 10,
      overflow: 'hidden',
      width: 300, // needs changing in the final version
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 10,
      width: 300,
      alignItems: 'center',
    },
})

// const buttonStyles = StyleSheet.create({
//   buttonContainer: {
//     backgroundColor: '#',
//   }
// })
  