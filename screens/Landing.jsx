import React from "react";
import { theme } from "../theme";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/top.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        ></ImageBackground>

        <Text style={[styles.heading1]}>Khula Trader</Text>

        <Text style={[styles.heading2]}>
          Sell your products and chat with your buyers.
        </Text>
      </View>

      <View style={[styles.buttonGroup]}>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigation.navigate("SignupPage")}>

          <Text style={[styles.buttonText1]}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.navigate("LoginPage")}>
          <Text style={[styles.buttonText2]}>Log in</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.teamtext]}>Accept team invite code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green300,

    justifyContent: "center",
    paddingHorizontal: 20,
  },

  heading1: {
    fontSize: 24,
    color: theme.colors.green200,
    fontWeight: "bold",
    marginTop: 20,
  },

  heading2: {
    fontSize: 34,
    color: theme.colors.white,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  backgroundImage: {
    width: 400,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.white,
    textAlign: "center",
    marginVertical: 10,
  },


  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.colors.green200,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor:theme.colors.green200,
  },
  secondaryButtonText: {
    color:theme.colors.green200,
  },

  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  button: {
    padding: 16,
    flex: 1,
    textAlign: "center",
    borderRadius: 30,
  },
  button1: {
    borderColor: theme.colors.green200,
    borderWidth: 2,
  },
  button2: {
    backgroundColor: theme.colors.green200,
  },
  buttonText1: {
    color: theme.colors.green200,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText2: {
    color: theme.colors.green300,
    textAlign: "center",
    fontWeight: "bold",
  },
  teamtext: {
    textAlign: "center",
    color: theme.colors.green200,
    marginTop: 32,
    marginBottom: 32,
    fontSize: 19.2,
    opacity: 0.5,
  },
});

export default Landing;
