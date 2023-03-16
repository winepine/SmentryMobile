import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]}>
    <Text>Abrar Hameed's Smentry Portal</Text>
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#ebebeb"
    >
      <LinearGradient colors={["#00d2ff", "#928DAB"]} style={styles.gradient}>
        <View>
          <Text style={styles.title}>{"Honda Civic RS Turbo"}</Text>
          <Text style={styles.description}>{"Abrar Hameed"}</Text>
        </View>
      </LinearGradient>
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "90%",
    marginBottom: 10,
    marginTop: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  description: {
    fontSize: 14,
  },
  gradient: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
});

export default FirstRoute;
