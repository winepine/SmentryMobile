import firestore from "@react-native-firebase/firestore";
const verifyUserLogin = async (email: string, password: string) => {
  const housesRef = firestore().collection("houses");
  let users: any[] = [];
  const docResponse = await (
    await housesRef.where("owner_name", "==", email).get()
  ).docs;
  if (docResponse.length) {
    if (docResponse[0]?.data().password === password) {
      return docResponse[0].data();
    }
  }
  return null;
};
export { verifyUserLogin };
