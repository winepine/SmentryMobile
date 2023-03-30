import { Text, TouchableOpacity } from "react-native";

const SButton = ({ title, color }: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        padding: 10,
        marginTop: 4,
        width: "90%",
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 6,
      }}
      //   onPress={() => navigate("Smentry Home", {})}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default SButton;
