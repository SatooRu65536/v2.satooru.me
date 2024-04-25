import { NextResponse } from 'next/server';

import { fetchMyProjects } from '@/fetcher/myprojects';

export const GET = async () => {
  const cache = process.env.SATOORU_ME.get('test');
  const myProjects = await fetchMyProjects();
  return NextResponse.json({ myProjects, cache }, { status: 200 });
};
