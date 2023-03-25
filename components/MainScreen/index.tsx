import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const FirstRoute = () => (
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
      Smentry Home
    </Text>
    <FirstTwo />
    <SecondTwo />
    <LastOne />
  </View>
);
const LastOne = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginHorizontal: 2,
      marginTop: 2,
      //   height: 100,
    }}
  >
    <TouchableHighlight
      style={{ ...styles.card, width: "94%", backgroundColor: "#FF7f7f" }}
      //   onPress={onPress}
      underlayColor="#aaa"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            SOS Bitch
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  </View>
);
const FirstTwo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      //   height: 100,
      marginTop: 15,
      marginHorizontal: 5,
    }}
  >
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#aaa"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Invite Visitors
          </Text>
        </View>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#aaa"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Entry Requests
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  </View>
);
const SecondTwo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginHorizontal: 5,
      marginTop: 2,
      //   height: 100,
    }}
  >
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#aaa"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
            }}
          >
            Manage Staff
          </Text>
        </View>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#aaa"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Delivery Requests
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 60,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    width: "47%",
    marginBottom: 5,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 20,
    height: 100,
    // marginLeft: 5,
  },
});
export default FirstRoute;
