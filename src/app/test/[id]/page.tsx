import { Item } from '../types';
import ItemDetail from '../../items/components/ItemDetail';

async function getItem(id: string): Promise<Item> {
  const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json');
  const data = await res.json();
  return data.data[id] as Item;
}

export default async function ItemPage({ params }: { params: { id: string } }) {
  const item = await getItem(params.id);
  return <ItemDetail item={item} />;
}