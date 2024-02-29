import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const style = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5,
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: 5,
  },
  overlay: {
    flex: 1,
    margin: 10,
    width: 35,
    backgroundColor: Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.shadow,
    padding: 20,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    color: Colors.white,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 110,
    height: 40,
    zIndex: 10,
    margin: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  scrollTopButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
  },
});

export default style;
