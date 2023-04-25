import { createContext, useContext, useReducer } from "react";
import { House, Resident, Vehicle } from "../types/house";
import { reducer } from "./house-reducer";
interface HouseContextProps {
  house: House;
  updateResidents: (residents: Resident[]) => void;
  updateVehicles: (vehicles: Vehicle[]) => void;
  updateHouse: (house: House) => void;
}
const HouseContext = createContext({ house: {} } as HouseContextProps);
const INITAL_STATE: House = {
  block: "",
  createdAt: new Date(),
  house_no: "",
  owner_contact: "",
  owner_name: "",
  password: "",
  residents: [],
  status: "",
  vehicles: [],
};
const useHouse = (initalData = INITAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initalData);
  const updateResidents = (residents: Resident[]) => {
    dispatch({ type: "UPDATE_RESIDENTS", payload: residents });
  };
  const updateVehicles = (vehicles: Vehicle[]) => {
    dispatch({ type: "UPDATE_VEHICLES", payload: vehicles });
  };
  const updateHouse = (house: House) => {
    dispatch({ type: "UPDATE_HOUSE", payload: house });
  };
  return {
    state,
    updateResidents,
    updateVehicles,
    updateHouse,
  };
};
export const HouseProvider = ({ children }: any) => {
  const { state, updateResidents, updateVehicles, updateHouse } = useHouse();
  return (
    <HouseContext.Provider
      value={{
        house: state,
        updateResidents,
        updateVehicles,
        updateHouse,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
export const useHouseDetails = () => useContext(HouseContext);
