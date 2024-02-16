import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.plainGrey,
    paddingVertical: 10,
  },
  link: {
    fontSize: 16,
  },
});
