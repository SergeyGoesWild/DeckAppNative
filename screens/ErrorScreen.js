import { Text, View, Image, StyleSheet, Button } from "react-native";
import errorImg from "../assets/ErrorImageBlack.png";

function ErrorScreen({ navigation }) {
  return (
    <View style={styles.containerError}>
      <Text style={styles.errorFirstLine}>Ooops...</Text>
      <Text style={styles.errorSecondLine}>Something went wrong!</Text>
      <Image source={errorImg} style={styles.errorImage} resizeMode="contain" />
      <Button title="Go home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorImage: {
    height: 300,
    width: 300,
    paddingBottom: 200,
  },
  errorFirstLine: {
    fontSize: 40,
  },
  errorSecondLine: {
    fontSize: 20,
  },
});

export default ErrorScreen;
