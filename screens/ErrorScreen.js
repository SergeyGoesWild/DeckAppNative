import { Text, View, Image, StyleSheet, Button } from "react-native";
import errorImg from "../assets/ErrorImageBlack.png";

function ErrorScreen({ navigation }) {
  return (
    <View style={styles.containerError}>
      <Text style={{ fontSize: 40 }}>Ooops...</Text>
      <Text style={{ fontSize: 20 }}>Something went wrong!</Text>
      <Image source={errorImg} style={styles.errorImage} resizeMode="contain" />
      <Button title="Go home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "light-grey",
    justifyContent: "center",
  },
  errorImage: {
    height: 300,
    width: 300,
    paddingBottom: 200,
  },
});

export default ErrorScreen;
