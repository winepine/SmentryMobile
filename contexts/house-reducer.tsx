import { House, Resident, Vehicle } from "../types/house";

export const reducer = (
  state: House,
  action:
    | { type: "UPDATE_RESIDENTS"; payload: Resident[] }
    | { type: "UPDATE_VEHICLES"; payload: Vehicle[] }
    | { type: "UPDATE_HOUSE"; payload: House }
) => {
  switch (action.type) {
    case "UPDATE_RESIDENTS":
      return { ...state, residents: action.payload };
    case "UPDATE_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "UPDATE_HOUSE":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
