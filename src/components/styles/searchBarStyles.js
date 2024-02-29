import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white,
    
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
