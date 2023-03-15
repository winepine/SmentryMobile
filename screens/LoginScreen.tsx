import { useEffect, useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { getCities } from "../services/addTodo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import Toast from "react-native-root-toast";
import { verifyUserLogin } from "../services/verifyUserLogin";
// import { useUser } from "../../contexts/userContext";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastText, setToastText] = useState("Logged In Successfully!");
  // const { user } = useUser();
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    setLoading(true);
    const DbUser = await verifyUserLogin(email, password);
    await getCities();
    console.log({ DbUser });
    setLoading(false);
    let toastText = "User Not Found.";
    if (DbUser) {
      toastText = "User Logged In Successfully.";
    }
    Toast.show(toastText, {
      duration: Toast.durations.LONG,
      backgroundColor: "gray",
    });
  };
  return (
    <RootSiblingParent>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.headingContainer}>
          <Text
            style={{
              fontFamily: "Courier New",
              fontSize: 26,
              fontWeight: "400",
            }}
          >
            S M E N T R Y
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              paddingTop: 2,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Modern Surveillance Solution
          </Text>
          <Text style={styles.heading}>Sign In</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            onFocus={() => console.log("Input field focused")}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            onFocus={() => console.log("Input field focused")}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Sign in button pressed")}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" size="small" />
            ) : (
              <Text style={styles.buttonText} onPress={handleLogin}>
                Sign In
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>© 2023 Javeot Technologies</Text>
        </View>
      </KeyboardAvoidingView>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  headingContainer: {
    alignItems: "center",
    marginTop: 120,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    // fontFamily: "Courier New",
    paddingLeft: 10,
    marginTop: 100,
    paddingRight: 10,
    textAlign: "center",
    flexWrap: "wrap",
    fontWeight: "600",
  },
  formContainer: {
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    width: "80%",
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  footerContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerText: {
    color: "#aaa",
  },
});

export default LoginScreen;
