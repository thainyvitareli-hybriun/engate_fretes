export interface iBanners {
  total: number;
  records: iBanner[];
}

export interface iBanner {
  id: number;
  actived: boolean;
  name: string;
  link_type: number;
  link: string;
  uri: string;
  created_at: string;
  updated_at: string;
}
