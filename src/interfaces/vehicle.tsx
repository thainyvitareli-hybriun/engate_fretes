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
