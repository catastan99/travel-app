import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import global from "../style/global";
import colors from "../style/colors";
import { Link } from "@react-navigation/native";

const Location = ({ city, image, id }) => {
  return (
    <ImageBackground style={styles.card} source={image}>
      <Link
        to={{ screen: "LocationScreen", params: { id } }}
        style={global.flexOne}
      >
        <View style={styles.textContainer}>
          <Text style={styles.cityName}>{city}</Text>
        </View>
      </Link>
    </ImageBackground>
  );
};

export default Location;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180,
    marginVertical: 8,
    marginHorizontal: 3,
    padding: 5,
    borderRadius: 15,
  },
  cityName: {
    fontSize: 18,
    color: "white",
    backgroundColor: colors.primary800,
    // alignSelf:'flex-end',
    padding: 1,
  },
});
