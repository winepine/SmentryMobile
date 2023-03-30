import { useNavigation } from "@react-navigation/native";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const InviteVisitorScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={[styles.scene, { backgroundColor: "#ffffff" }]}>
      <Text
        style={{
          fontSize: 32,
          padding: 20,
          paddingBottom: 10,
          flexWrap: "wrap",
          fontWeight: "700",
        }}
      >
        Enter Visitor Details
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Name"
            // onChangeText={text => setEmail(text)}
            // value={email}
            onFocus={() => console.log("Input field focused")}
          />
          <TextInput
            style={styles.input}
            placeholder="Numberplate (Optional)"
            // onChangeText={text => setEmail(text)}
            // value={email}
            onFocus={() => console.log("Input field focused")}
          />
          <TextInput
            style={styles.input}
            placeholder="Additional Information (Optional)"
            // onChangeText={text => setEmail(text)}
            // value={email}
            onFocus={() => console.log("Input field focused")}
          />
        </View>
        <View
          style={{
            //   flex: 1,
            //   position: "absolute",
            //   bottom: 16,
            marginVertical: 16,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#4CAF50",
              padding: 10,

              width: "90%",
              paddingLeft: 25,
              paddingRight: 25,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Button title="Back" onPress={() => navigate("Smentry Home", {})} />
      {/* <Button title="Submit" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 60,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: "90%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 8,
  },
});
export default InviteVisitorScreen;
