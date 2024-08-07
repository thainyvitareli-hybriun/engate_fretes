export interface iAPIFindManyVehicles {
  total: number;
  records: iVehicle[];
}

export interface iVehicle {
  id: number;
  license_plate: string;
  brand: string;
  model: string;
  color: string;
  year: string;
  status: number;
  user: {
    id: number;
    name: string;
    phone: string;
    company_user: {
      social_reason: string;
      document: string;
      accountable_name: string;
      accountable_phone: string;
      acccountable_position: string;
    };
  };
}

export interface iCreateVehicle {
  license_plate: string;
  color: string;
  model: string;
  brand: string;
  year: string;
  vehicle_front: Blob | {uri: string; type: string; fileName: string};
  vehicle_back: Blob | {uri: string; type: string; fileName: string};
  vehicle_left: Blob | {uri: string; type: string; fileName: string};
  vehicle_right: Blob | {uri: string; type: string; fileName: string};
  document: Blob | {uri: string; type: string; fileName: string};
}

export interface iUpdateVehicle {
  id: string | number;
  license_plate: string;
  color: string;
  status?: number;
}
