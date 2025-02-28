
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { json } from 'stream/consumers';

export async function GET() {
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY date DESC;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');

  try {
    
    await sql`
    INSERT INTO posts (id, title, content, date, author)
    VALUES (${id}, ${title}, ${content}, ${date}, 'eugene z')
    ON CONFLICT (id) DO NOTHING;
  `;
    return NextResponse.json({message: "Post sucessfully created"}, {status: 200});

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
