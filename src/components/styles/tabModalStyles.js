import { StyleSheet } from "react-native";
import * as colors from "./colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: colors.plainGrey,
    paddingBottom: 10,
  },
  tab: {
    paddingVertical: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.buttonBlue,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  cardImage: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default style;
