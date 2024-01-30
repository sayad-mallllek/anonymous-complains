"use server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  const sql = neon(new String(process.env.DATABASE_URL).toString());

  const body = await req.json();

  if (!body.person || !body.comment)
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 400,
    });

  const checkIfPersonExists =
    await sql`SELECT COUNT(id) FROM Person WHERE name = ${body.person}`;

  if (+checkIfPersonExists[0].count === 0) {
    const res = await sql`INSERT INTO Person (name) VALUES (${body.person})`;
    console.log({ res });
  }

  const personId = await sql`SELECT id FROM Person WHERE name = ${body.person}`;
  console.log({ personId });
  await sql`INSERT INTO Comment (person_id, message) VALUES (${personId[0].id}, ${body.comment})`;

  return new Response(JSON.stringify({ message: "Great Success!" }));
}
