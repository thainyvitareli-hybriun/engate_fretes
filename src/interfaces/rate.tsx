export interface iRates {
  total: number;
  records: iRate[];
}

export interface iRate {
  id: number;
  transport_request_id: number;
  rated_by: number;
  received_by: number;
  stars: number;
  description: string;
  created_at: string;
}
