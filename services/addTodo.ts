import firestore from "@react-native-firebase/firestore";

export const addTodo = async () => {
  const ref = firestore().collection("todos");
  const response = await ref.add({
    title: "New Todo",
    completed: false,
  });
  console.log({ response });
};
