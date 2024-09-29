import axios from 'axios';
import { Item } from '../types/types';
import ItemDetail from '../components/ItemDetail';

async function getItem(id: string): Promise<Item> {
  const res = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json');
  return res.data.data[id] as Item; // Axios 사용
}

export default async function ItemPage({ params }: { params: { id: string } }) {
  const item = await getItem(params.id);
  return <ItemDetail item={item} />;
}
