import { NextResponse } from 'next/server';
import { fetchItems, fetchItemDetail } from '../../services/itemService'; // 서비스 파일에서 함수 가져오기

// 전체 아이템 목록을 가져오는 API
export async function GET(request: Request) {
  try {
    const items = await fetchItems();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: '아이템 데이터를 가져오는 중 오류가 발생했습니다.' }, { status: 500 });
  }
}

// 특정 아이템의 상세 정보를 가져오는 API
export async function GET(request: Request, { params }: { params: { itemId: string } }) {
  const { itemId } = params;

  try {
    const itemDetail = await fetchItemDetail(itemId);

    if (!itemDetail) {
      return NextResponse.json({ error: `아이템 ID ${itemId}의 상세 정보를 찾을 수 없습니다.` }, { status: 404 });
    }

    return NextResponse.json(itemDetail);
  } catch (error) {
    return NextResponse.json({ error: `아이템 상세 정보를 가져오는 중 오류가 발생했습니다 (ID: ${itemId}).` }, { status: 500 });
  }
}
