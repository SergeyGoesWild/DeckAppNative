import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import * as Colors from "../components/styles/colors";

function FirstScreen({ navigation }) {
  return (
    <View style={styles.containerFirst}>
      <Text style={styles.firstPageText}>This is the first page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Pokemon Decks")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFirst: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  firstPageText: {
    padding: 30,
  },
  button: {
    backgroundColor: Colors.button,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FirstScreen;
