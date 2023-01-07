import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,} from 'react-native';
import TimerList from './TimerList';
import { useState } from 'react';

export default function App() {

  const [data, setData] = useState('');
  
  const updateWorkout = () => {
    setData("This is data from Parent Component to the Child Component.");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Let see if this works.</Text>
      <StatusBar style="auto" />
      <TimerList 
        updateWorkout={data}
      />
      <TouchableOpacity
          activeOpacity={0.7}
          onPress={updateWorkout}
          style={styles.touchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
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
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
