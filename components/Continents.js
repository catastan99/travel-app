import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Button from "./UI/Button";
import colors from "../style/colors";

const Continents = ({ filterHandler }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Button style={{ fontSize: 14 }} onPress={() => filterHandler(null)}>
          All
        </Button>
        <Button
          style={{ fontSize: 14 }}
          onPress={() => filterHandler("Europe")}
        >
          Europe
        </Button>
        <Button
          style={{ fontSize: 14 }}
          onPress={() => filterHandler("Africa")}
        >
          Africa
        </Button>
        <Button
          style={{ fontSize: 14 }}
          onPress={() => filterHandler("America")}
        >
          America
        </Button>
        <Button style={{ fontSize: 14 }} onPress={() => filterHandler("Asia")}>
          Asia
        </Button>
      </ScrollView>
    </View>
  );
};

export default Continents;

const styles = StyleSheet.create({});
