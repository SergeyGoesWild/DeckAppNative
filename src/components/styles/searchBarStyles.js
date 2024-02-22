import { StyleSheet } from "react-native";
import * as Colors from "./colors";

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
<<<<<<< HEAD
    borderBottomColor: '#ccc',
    borderRadius: 5,
=======
    borderBottomColor: Colors.plainGrey,
>>>>>>> 70d4ab247ee1b3cda1b9bd076188c83e1343e3b4
  },
  input: {
    height: 40,
    borderColor: Colors.plainGrey,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  button: {
    borderColor: 'blue',
  },
});

export default style
