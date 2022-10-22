import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Location from "./Location";
import { locations } from "../data/locations";
import global from "../style/global";
import colors from "../style/colors";

const Locations = ({ filter }) => {
  const [filteredLocations, setFilteredLocations] = useState(locations);
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

  useLayoutEffect(() => {
    let newLocations = [];
    if (filter) {
      newLocations = locations.filter(
        (location) => location.continent === filter
      );
      setFilteredLocations(newLocations);
    } else setFilteredLocations(locations);
  }, [filter]);

  return (
    <View style={global.flexOne}>
      {filteredLocations.length > 0 && (
        <FlatList
          data={filteredLocations}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          horizontal={false}
        />
      )}
      {!filteredLocations.length && (
        <Text style={styles.errorMessage}>
          Sorry! We couldn't find locations in {filter}.
        </Text>
      )}
    </View>
  );
};

export default Locations;

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 20,
    fontSize: 18,
    color: colors.primary600,
    fontWeight: "bold",
    borderBottomWidth: 0.2,
    paddingBottom: 15,
    borderBottomColor: colors.primary300,
  },
});
