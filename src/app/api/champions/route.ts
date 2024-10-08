import { NextResponse } from 'next/server';
import { fetchChampions } from '../../../services/championsApi';

export async function GET() {
  const limit = 16;
  const page = 1;

  try {
    const { champions, totalPages } = await fetchChampions(page, limit);
    return NextResponse.json({ champions, totalPages });
  } catch (error) {
    return NextResponse.json({ error: '챔피언 목록을 불러오는 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
