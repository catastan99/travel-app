import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "@react-navigation/native";
import colors from "../style/colors";

const backgroundImg = require("../assets/images/airplane.jpg");

const EntryScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={backgroundImg}>
        <LinearGradient
          style={styles.container}
          colors={["transparent", "rgba(0,0,0,0.9)"]}
        >
          <SafeAreaView style={[styles.container, { flexDirection: "row" }]}>
            <View style={styles.bottomTitle}>
              <Text style={styles.title}>It's time to travel</Text>

              <View style={styles.outerContainer}>
                <Link
                  to={{ screen: "HomeScreen" }}
                  style={styles.innerContainer}
                >
                  <Text style={styles.innerContainer}>Let's go</Text>
                </Link>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTitle: {
    alignSelf: "flex-end",
    marginBottom: 50,
    padding: 30,
    flex: 1,
  },
  title: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    marginBottom: 8,
  },
  outerContainer: {
    padding: 5,
    overflow: "hidden",
  },
  innerContainer: {
    padding: 15,
    backgroundColor: colors.cream,
    alignSelf: "flex-start",
    borderRadius: 10,
    fontWeight: "500",
    color: colors.primary800,
    fontSize: 18,
  },
});
