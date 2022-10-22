import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: Number;
}
export default function App(id: Props) {
  return (
    <View style={styles.container}>
      <Text>Open up App.ts to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
