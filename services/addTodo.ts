import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { app } from "../firebase/firebaseConfig";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

// Get a list of cities from your database
export async function getCities() {
  const db = getFirestore(app);
  const housesRef = collection(db, "houses");
  // const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(housesRef);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log({ cityList });
  return cityList;

  // let users: any[] = [];
  // const docResponse = await (
  //   await housesRef.where("owner_name", "==", email).get()
  // ).docs;
  // if (docResponse.length) {
  //   if (docResponse[0]?.data().password === password) {
  //     return docResponse[0].data();
  //   }
  // }
  return null;
}
