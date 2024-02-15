import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const searchBarStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.plainGrey,
  },
  input: {
    height: 40,
    borderColor: Colors.plainGrey,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
