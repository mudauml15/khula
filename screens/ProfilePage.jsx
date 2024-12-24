import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Get user details from AsyncStorage
        const storedUserDetails = await AsyncStorage.getItem('userDetails')
        if (storedUserDetails) {
          setUserDetails(JSON.parse(storedUserDetails))
        } else {
          Alert.alert('No user data', 'User details not found in storage.')
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch user details.')
      }
    }

    fetchUserDetails()
  }, [])

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userDetails') // Remove the stored user details
      Alert.alert('Success', 'You have logged out successfully!')
      // Navigate to login or home screen if needed
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.')
    }
  }

  return (
    <View style={styles.container}>
      {userDetails ? (
        <>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.text}>Name: {userDetails.name}</Text>
          <Text style={styles.text}>Surname: {userDetails.surname}</Text>
          <Text style={styles.text}>Password: {userDetails.password}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text style={styles.text}>Loading user data...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#002B4C',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
})

export default ProfilePage
