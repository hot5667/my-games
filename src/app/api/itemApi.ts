import { NextResponse } from 'next/server';
import { fetchItems, fetchItemDetail } from '../../services/itemService';

// 전체 아이템 목록을 가져오는 API (페이지네이션 적용)
export async function GET(request: Request, { params }: { params?: { itemId?: string } }) {
  const { searchParams } = new URL(request.url);
  
  // itemId가 있는 경우: 특정 아이템 상세 정보 요청
  if (params?.itemId) {
    const itemId = params.itemId;

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

  // itemId가 없는 경우: 전체 아이템 목록 요청 (페이지네이션 적용)
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  try {
    const items = await fetchItems(page, limit);
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: '아이템 데이터를 가져오는 중 오류가 발생했습니다.' }, { status: 500 });
  }
}