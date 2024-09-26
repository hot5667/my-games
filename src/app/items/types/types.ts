export interface Item {
  id: string;
  name: string;
  image: { full: string };
}

export interface ItemsResponse {
  data: Record<string, Item>;
}
