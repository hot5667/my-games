import { NextResponse } from 'next/server';
import { fetchChampionDetail } from '../../../../services/championsApi';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const championDetail = await fetchChampionDetail(id);

    if (!championDetail) {
      return NextResponse.json(
        { error: `챔피언 ID ${id}의 상세 정보를 찾을 수 없습니다.` },
        { status: 404 }
      );
    }

    return NextResponse.json(championDetail);
  } catch (error) {
    return NextResponse.json(
      { error: `챔피언 상세 정보를 가져오는 중 오류가 발생했습니다 (ID: ${id}).` },
      { status: 500 }
    );
  }
}
