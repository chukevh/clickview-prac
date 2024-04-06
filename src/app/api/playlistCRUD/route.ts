import { Database } from '@/common/db/database';

export async function GET() {
  try {
    const data = await Database.playlists();

    return Response.json(data);
  } catch {
    return new Response(`File not found`, { status: 400 })
  }
}

export async function POST() {
  try {
    const data = await Database.playlists();

    return Response.json(data);
  } catch {
    return new Response(`File not found`, { status: 400 })
  }
}