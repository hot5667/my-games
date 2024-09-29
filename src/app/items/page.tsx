import axios from 'axios';
import ItemList from './components/ItemList';

interface Item {
  image: {
    full: string;
  };
  name: string;
}

interface ApiResponse {
  data: Record<string, Item>;
}

const fetchItems = async () => {
  const response = await axios.get<ApiResponse>('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json');
  return response.data.data;
};

const Page = async () => {
  const items = await fetchItems();
  return <ItemList items={items} />;
};

export default Page;