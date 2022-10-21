import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Location from "./Location";
import { locations } from "../data/locations";
import global from "../style/global";

const Locations = () => {
  const renderItem = ({ item }) => {
    return (
      <Location
        id={item.id}
        city={item.city}
        image={item.image}
        country={item.country}
      />
    );
  };

  return (
    <View style={global.flexOne}>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default Locations;

