import firestore from "@react-native-firebase/firestore";
const addInvite = async (inviteObject: any) => {
  try {
    firestore()
      .collection("invites")
      .add(inviteObject)
      .then(() => {
        console.log("Invite Added Successfully!");
      });
  } catch (e) {
    console.log(e);
  }
};
export { addInvite };
