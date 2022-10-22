import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { Appbar, Button, TextInput } from "react-native-paper";
import { useState } from "react";
export default function App() {
  const ref = firestore().collection("todos");
  const [todo, setTodo] = useState<string>("");
  const addTodo = async () => {
    const response = await ref.add({
      title: todo,
      completed: false,
    });
    setTodo("");
    console.log({ response });
  };
  return (
    <>
      <Appbar>
        <Appbar.Content title={"TODOs List"} />
      </Appbar>
      <ScrollView style={{ flex: 1 }}>
        <Text>List of TODOs!</Text>
      </ScrollView>
      <TextInput label={"New Todo"} onChangeText={setTodo} value={todo} />
      <Button onPress={() => addTodo()}>Add TODO</Button>
    </>
  );
}
