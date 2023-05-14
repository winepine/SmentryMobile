import firestore from "@react-native-firebase/firestore";
import { House } from "../types/house";
const addVehicle = async (houseObject: House) => {
  try {
    firestore()
      .collection("houses")
      .doc(houseObject.id)
      .update(houseObject)
      .then(() => {
        console.log("Updated Successfully!");
      });
  } catch (e) {
    console.log(e);
  }
};
export { addVehicle };
