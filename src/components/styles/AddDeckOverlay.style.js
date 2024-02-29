import * as Colors from "./colors.js";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    elevation: 9,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 35,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    color: Colors.white,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: 150,
    borderColor: Colors.plainGrey,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  label: {
    marginBottom: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: Colors.shadow,
    elevation: 5,
  },
});
