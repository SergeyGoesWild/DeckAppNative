import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
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
    borderRadius: 15,
  },
});

export default style
