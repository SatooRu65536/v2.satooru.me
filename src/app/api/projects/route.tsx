import { fetchMyProjects } from '@/fetcher/myprojects';

import { NextResponse } from 'next/server';

export async function GET() {
  const myProjects = await fetchMyProjects();
  return NextResponse.json(myProjects, { status: 200 });
}
