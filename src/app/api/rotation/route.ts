
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=YOUR_API_KEY');
  const data = await response.json();

  return NextResponse.json(data);
}