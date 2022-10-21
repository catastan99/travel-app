import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { locations } from "../data/locations";
import global from "../style/global";
import colors from "../style/colors";

const LocationScreen = ({ route }) => {
  const [locationData, setLocationData] = useState({});
  useEffect(() => {
    const filter = locations.filter((item) => item.id === route.params.id);
    if (filter) setLocationData(filter[0]);
  }, []);
  return (
    <View style={global.flexOne}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={locationData.image}
          style={styles.image}
          resizeMode="cover"
        />
        {locationData.badge && (
          <Text style={styles.badge}>{locationData.badge}</Text>
        )}
      </View>
      <View style={styles.locationDetailsContainer}>
        <View style={global.container}>
          <Text style={[styles.city]}>{locationData.city}</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.contentLabel}>Country:</Text>{" "}
            {locationData.country}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.contentLabel}>Continent:</Text>{" "}
            {locationData.continent}
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.contentLabel}>Presentation:</Text>{" "}
            {locationData.shortDescription}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: "35%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 40,
    right: 10,
    backgroundColor: colors.green,
    color: "white",
    borderRadius: 10,
    padding: 5,
  },
  locationDetailsContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  city: {
    fontFamily: "rubik",
    fontSize: 45,
    textAlign: "center",
    color: colors.primary800,
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  contentLabel: {
    padding: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary800,
    paddingVertical: 5,
  },
  paragraph: {
    marginBottom: 5,
    fontSize: 15,
    color: colors.primary600,
    textAlign: "justify",
  },
});
