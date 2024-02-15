import { StyleSheet } from "react-native";
import * as Colors from "../components/styles/colors";

export const searchBarStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.searchBarStyles,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
