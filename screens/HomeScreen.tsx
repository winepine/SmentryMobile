import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FirstRoute from "../components/VehiclesScreen";
//@ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]}>
    <Text>Second Tab</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]}>
    <Text>Settings</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#000" }}
    style={{
      backgroundColor: "white",
      height: "10%",
      borderTopColor: "#f0f0f0",
      borderWidth: "1px",
    }}
    labelStyle={{ fontSize: 14 }}
    activeColor="black"
    inactiveColor="gray"
    renderIcon={({ route, focused, color }) => {
      let iconName;

      switch (route.key) {
        case "first":
          iconName = focused ? "car-sport" : "car-sport-outline";
          break;
        case "second":
          iconName = focused ? "person" : "person-outline";
          break;
        case "third":
          iconName = focused ? "settings" : "settings-outline";
          break;
        default:
          iconName = focused ? "home" : "home-outline";
          break;
      }

      return <Ionicons name={iconName} size={24} color={color} />;
    }}
  />
);

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "" },
    { key: "second", title: "" },
    { key: "third", title: "" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get("window").width }}
      tabBarPosition="bottom"
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
