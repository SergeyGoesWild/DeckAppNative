import * as Colors from "./colors.js";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  newDeckButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
