import { StyleSheet, Text, View, Button } from "react-native";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={() => {}} title="Click" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;
