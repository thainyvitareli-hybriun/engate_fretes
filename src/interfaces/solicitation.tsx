import iFindMany from './findMany';

export interface iAPIFindMany {
  total: number;
  records: iSolicitation[];
}

export interface iSolicitation {
  id: number;
  selected_driver_id: number;
  collection_date: string;
  delivery_date: string;
  origin_address: iOriginAddress;
  destination_address: iDestinationAddress;
  status: number;
  estimated_distance: string;
  vehicle_type_transport_requests: VehicleTypeTransportRequest[];
}

interface iOriginAddress {
  neighborhood: string;
  city: string;
  state: string;
}

interface iDestinationAddress {
  neighborhood: string;
  city: string;
  state: string;
}

interface VehicleTypeTransportRequest {
  vehicle_type: VehicleType;
}

export interface VehicleType {
  name: string;
  icon?: string;
}

export interface iFindManySolicitations extends iFindMany {
  status?: number[];
  from?: Date | string;
  to?: Date | string;
}
