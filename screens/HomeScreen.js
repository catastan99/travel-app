import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import global from "../style/global";
import Title from "../components/UI/Title";
import colors from "../style/colors";
import Continents from "../components/Continents";
import Locations from "../components/Locations";

const HomeScreen = () => {
  const [enteredText, setEnteredText] = useState("");
  const [filter, setFilter] = useState("");

  const filterHandler = (filter) => {
    setFilter(filter);
  };

  const searchInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };
  return (
    <SafeAreaView style={[global.flexOne, { backgroundColor: "white" }]}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <View style={[global.flexOne, global.container]}>
          <Title style={styles.title}>Where would you like to travel?</Title>

          <View>
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              value={enteredText}
              onChangeText={searchInputHandler}
            />
          </View>
          <Continents filterHandler={filterHandler} />
          <Locations filter={filter} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.primary300,
    backgroundColor: colors.cream,
    borderRadius: 10,
    color: colors.primary800,
    marginBottom: 20,
  },
  scrollContainer: {},
});
