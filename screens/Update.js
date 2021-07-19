import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
const Update = ({ navigation }) => {



  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.heading}>Edit details</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            label="Name"
            mode="outlined"
            theme={themes}
          />
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            label="Email"
            mode="outlined"
            theme={themes}
          />
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            label="Mobile number"
            mode="outlined"
            theme={themes}
          />
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            label="Job"
            mode="outlined"
            theme={themes}
          />
        </View>
        <Button style={styles.button} mode="contained" onPress={() => { navigation.navigate('Home') }}>
          <Text>Update</Text>
        </Button>
      </View>
    </View>
  )
}
const themes = {
  colors: {
    primary: 'black'
  }
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputcontainer: {
    bottom: 250,
    width: 390,
    height: 44,
    margin: 15,

    flexDirection: 'column-reverse'
  },
  button: {
    top: 260,
    width: 160,
    left: 120,
    backgroundColor: "black"
  },
  heading: {
    fontSize: 20,
    top: 230,
    left: 150
  },

})
export default Update;