import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AlertSos = () => {
  return (
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
        style={{ ...styles.card, width: "94%", backgroundColor: "#E53E3E" }}
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
          <View style={styles.flexCenterIcons}>
            <Ionicons name={"alert-circle"} size={24} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
                color: "white",
              }}
            >
              Alert SOS
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
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
  flexCenterIcons: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AlertSos;
