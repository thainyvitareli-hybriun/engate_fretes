export interface iAPIFindMany {
  total: number;
  records: iRate[];
}

export interface iRate {
  id: number;
  transport_request_id: number;
  rated_by: string;
  avatar: string;
  stars: number;
  description: string;
  created_at: string;
}
