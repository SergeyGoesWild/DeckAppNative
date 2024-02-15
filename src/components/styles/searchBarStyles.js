import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const searchBarStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.searchBarStyles,
    borderBottomWidth: 1,
    borderBottomColor: Colors.searchBarBorderColor,
  },
  input: {
    height: 40,
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
