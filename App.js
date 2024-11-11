import { StyleSheet, Text, View } from 'react-native';
import AnalogClock from './screens/AnalogClock';
import TimeCreator from './screens/TimeCreator'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>AM</Text>
    //   <AnalogClock
    //       minuteHandLength={110}
    //     />
    // </View>
    <View style={styles.container}>
      <TimeCreator />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
