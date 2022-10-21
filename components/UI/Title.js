import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../style/colors";

const Title = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: colors.primary800,
    fontFamily: "rubik",
  },
});
