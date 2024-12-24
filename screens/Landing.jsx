
import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native'
import { ImageBackground, SafeAreaView } from 'react-native-web'

const { height } = Dimensions.get('window')
const Landing = () => {
  return (



    <View style={[styles.container]}>
      <View style={[styles.section1]}>
        
        




      </View>
      <View style={[styles.buttonGroup]}>
        <TouchableOpacity style={[styles.button, styles.button1]}>
          <Text style={[styles.buttonText1]}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button2]}>
          <Text style={[styles.buttonText2]}>Log in</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.teamtext]}>Accept team invite code</Text>
    </View>


  )
}

export default Landing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#013332',
  },
  section1: {
    flex: 1,
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,

  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    padding: '.5rem',
    gap: '.5rem',
  },
  button: {
    padding: '1rem',
    flex: 1,
    textAlign: 'center',
    borderRadius: '2rem',
  },
  button1: {
    borderColor: "#3DD58B",
    borderWidth: '2px',
  },
  button2: {
    backgroundColor: '#3dd58b',
  },
  buttonText1: {
    color: '#3dd58b',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#013332',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  teamtext: {
    textAlign: 'center',
    color: '#3dd58b',
    marginTop: '2rem',
    marginBottom: '2rem',
    fontSize: '1.2rem',
    opacity: '0.5',
  },
})