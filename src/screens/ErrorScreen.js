import { Text, View, Image, StyleSheet, Button } from "react-native";
import errorImg from "../../assets/ErrorImageBlack.png";

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

<<<<<<< HEAD
export default ErrorScreen;
=======
export default ErrorScreen;
>>>>>>> 70d4ab247ee1b3cda1b9bd076188c83e1343e3b4
