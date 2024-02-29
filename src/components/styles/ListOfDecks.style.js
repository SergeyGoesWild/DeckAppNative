import * as Colors from "./colors.js";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 25,
    height: 50,
    width: 150,
    borderBottomColor: Colors.plainGrey,
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
