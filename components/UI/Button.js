import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../style/colors";

const Button = ({ children, style, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: colors.yellow }}
        style={[styles.innerContainer, style]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, style]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 5,
    borderRadius: 30,
    overflow: "hidden",
  },
  innerContainer: {
    alignSelf: "flex-start",
    backgroundColor: colors.cream,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.primary800,
  },
});
