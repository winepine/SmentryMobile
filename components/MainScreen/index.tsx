import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";
const dummyData = [
  { id: 1, title: "Lulli Entered Without Permission" },
  { id: 2, title: "Delivery Request Sent To Guard" },
  { id: 3, title: "New Vehicle Added! FDA-231" },
  { id: 4, title: "New Vehicle Added! FDA-231" },
  { id: 5, title: "New Vehicle Added! FDA-231" },
  { id: 5, title: "New Vehicle Added! FDA-231" },
  { id: 5, title: "New Vehicle Added! FDA-231" },
  { id: 5, title: "New Vehicle Added! FDA-231" },
  { id: 5, title: "New Vehicle Added! FDA-231" },
];
const FirstRoute = () => (
  <ScrollView>
    <View
      style={[styles.scene, { backgroundColor: "#E6E6EA", paddingBottom: 10 }]}
    >
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
      <View
        style={{
          backgroundColor: "#fafafa",
          marginTop: 10,
          borderRadius: 20,
          minHeight: 500,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            padding: 20,
            paddingBottom: 10,
            flexWrap: "wrap",
            fontWeight: "500",
          }}
        >
          Notifications
        </Text>
        {dummyData.map((item, key) => (
          <TouchableHighlight
            key={key}
            style={{
              ...styles.card,
              // height: 50,
              minHeight: 50,
              alignItems: "center",

              justifyContent: "flex-start",
              width: "94%",
              backgroundColor: "#48BB78",
              flexDirection: "row",
              // justifyContent: "space-evenly",
              // alignItems: "center",
              marginLeft: 10,
              marginTop: 2,
              padding: 10,
            }}
            //   onPress={onPress}
            underlayColor="#aaa"
          >
            <View
              style={
                {
                  // flexDirection: "row",
                  // justifyContent: "space-evenly",
                  // alignItems: "center",
                }
              }
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Ionicons name={"notifications"} size={18} color={"white"} />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 14,
                    flexWrap: "wrap",
                    fontWeight: "600",
                    textAlign: "left",
                    color: "white",
                    maxWidth: 280,
                  }}
                >
                  {item.title}
                  l;asmdl;amdl;amsdl;mal;sdmalsmd;almdl;amsdlamsdl;naklsdnklan
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          //   <View key={item.id} style={{ padding: 10 }}>
          //     <Text>{item.title}</Text>
          //   </View>
        ))}
      </View>
    </View>
  </ScrollView>
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
const FirstTwo = () => {
  const { navigate } = useNavigation();

  return (
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
        style={{ ...styles.card, backgroundColor: "#38A169" }}
        onPress={() => navigate("Enter Visitor Details", {})}
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
            <Ionicons name={"add-circle"} size={24} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
                color: "white",
              }}
            >
              Invite Visitors
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.card, backgroundColor: "#3182CE" }}
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
          <View style={styles.flexCenterIcons}>
            <Ionicons name={"enter"} size={24} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                alignItems: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              Entry Requests
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
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
      style={{ ...styles.card, backgroundColor: "#4299E1" }}
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
          <Ionicons name={"people"} size={24} color={"white"} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Manage Staff
          </Text>
        </View>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={{ ...styles.card, backgroundColor: "#48BB78" }}
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
        <View style={styles.flexCenterIcons}>
          <Ionicons name={"git-pull-request"} size={24} color={"white"} />

          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
              color: "white",
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
  logo: {
    width: 100,
    height: 70,
    // opacity: 0.7,
  },
  flexCenterIcons: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FirstRoute;
