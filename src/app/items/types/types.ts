export interface Item {
  id: string;
  name: string;
  description: string;
  plaintext: string;
  image?: {
    full: string;
  };
  gold?: {
    total: number;
  };
}

export interface ItemsResponse {
  type: string;
  version: string;
  data: {
    [key: string]: Item;
  };
}