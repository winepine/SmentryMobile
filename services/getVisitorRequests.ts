import firestore from "@react-native-firebase/firestore";
const getVisitorRequests = async (house: string, block: string) => {
  try {
    const invitesRef = await firestore().collection("house_visitors").get();
    let invites: any[] = [];
    invitesRef.docs.forEach(doc => {
      if (
        doc.data().house_no.block === block &&
        doc.data().house_no.house === house
      ) {
        invites.push({ ...doc.data(), id: doc.id });
      }
    });
    return invites;
  } catch (e) {
    console.log(e);
  }
};
export default getVisitorRequests;
