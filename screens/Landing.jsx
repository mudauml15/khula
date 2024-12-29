import React from "react";
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
    backgroundColor: "#013332",

    justifyContent: "center",
    paddingHorizontal: 20,
  },

  heading1: {
    fontSize: 24,
    color: "#00A676",
    fontWeight: "bold",
    marginTop: 20,
  },

  heading2: {
    fontSize: 34,
    color: "#ffffff",
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
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#B0D5D1",
    textAlign: "center",
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#00A676",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#00A676",
  },
  secondaryButtonText: {
    color: "#00A676",
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
    borderColor: "#3DD58B",
    borderWidth: 2,
  },
  button2: {
    backgroundColor: "#3dd58b",
  },
  buttonText1: {
    color: "#3dd58b",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#013332",
    textAlign: "center",
    fontWeight: "bold",
  },
  teamtext: {
    textAlign: "center",
    color: "#3dd58b",
    marginTop: 32,
    marginBottom: 32,
    fontSize: 19.2,
    opacity: 0.5,
  },
});

export default Landing;
