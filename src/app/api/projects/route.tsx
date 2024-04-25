import { NextResponse } from 'next/server';

import { fetchMyProjects } from '@/fetcher/myprojects';

export const GET = async () => {
  const myProjects = await fetchMyProjects();
  return NextResponse.json(myProjects, { status: 200 });
};

export const runtime = 'edge';
