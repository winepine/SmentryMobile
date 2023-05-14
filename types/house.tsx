export interface House {
  block: string;
  createdAt: Date;
  house_no: string;
  owner_contact: string;
  owner_name: string;
  password: string;
  residents: Array<Resident>;
  status: string;
  vehicles: Array<Vehicle>;
  id: string;
}
export type Resident = { name: string; cnic: string };
export type Vehicle = { name: string; numberplate: string };
