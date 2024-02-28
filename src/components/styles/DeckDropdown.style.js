import * as Colors from "./colors.js";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOk: {
    backgroundColor: Colors.green,
    color: Colors.white,
    width: 50,
    marginHorizontal: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  buttonDel: {
    backgroundColor: Colors.red,
    color: Colors.white,
    width: 50,
    marginHorizontal: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "normal",
    paddingHorizontal: 15,
  },
  input: {
    height: 30,
    width: 150,
    borderColor: Colors.plainGrey,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: Colors.white,
    marginRight: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: Colors.shadow,
  },
});
