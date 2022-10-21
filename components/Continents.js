import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Button from "./UI/Button";
import colors from "../style/colors";

const Continents = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Button style={{ fontSize: 14, backgroundColor: colors.yellow }}>
          All
        </Button>
        <Button style={{ fontSize: 14 }}>Europe</Button>
        <Button style={{ fontSize: 14 }}>Africa</Button>
        <Button style={{ fontSize: 14 }}>America</Button>
        <Button style={{ fontSize: 14 }}>Asia</Button>
      </ScrollView>
    </View>
  );
};

export default Continents;

const styles = StyleSheet.create({});
