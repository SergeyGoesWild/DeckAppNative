import { StyleSheet } from "react-native";
import * as colors from "./colors";

export const style = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: colors.white,
      paddingVertical: 10,
      borderColor: colors.black,
      borderWidth: '1',
      borderRadius: 15,
    },
    link: {
      fontSize: 16,
    },
  });

  export default style
