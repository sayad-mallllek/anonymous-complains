"use server";
import { neon } from "@neondatabase/serverless";
import UAParser from "ua-parser-js";
import {
  Configuration,
  EmailsApi,
  EmailTransactionalMessageData,
} from "@elasticemail/elasticemail-client-ts-axios";

const config = new Configuration({
  apiKey: process.env.EMAIL_API_KEY,
});

const emailsApi = new EmailsApi(config);

const sendTransactionalEmails = (
  emailTransactionalMessageData: EmailTransactionalMessageData
): void => {
  emailsApi
    .emailsTransactionalPost(emailTransactionalMessageData)
    .then((response) => {
      console.log("API called successfully.");
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export async function POST(req: Request) {
  const sql = neon(new String(process.env.DATABASE_URL).toString());

  const body = await req.json();

  if (!body.person || !body.comment)
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 400,
    });

  const checkIfPersonExists =
    await sql`SELECT COUNT(id) FROM Person WHERE name = ${body.person}`;

  if (+checkIfPersonExists[0].count === 0)
    await sql`INSERT INTO Person (name) VALUES (${body.person})`;

  const personId = await sql`SELECT id FROM Person WHERE name = ${body.person}`;
  await sql`INSERT INTO Comment (person_id, message) VALUES (${personId[0].id}, ${body.comment})`;

  const emailTransactionalMessageData = {
    Recipients: {
      To: ["sayadmallllek@gmail.com"],
    },
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
          Content: "<strong>Example content<strong>",
        },
        {
          ContentType: "PlainText",
          Charset: "utf-8",
          Content: "Example content",
        },
      ],
      From: "ibrahim@poyesis.fr",
      Subject: "Example transactional email",
    },
  };

  sendTransactionalEmails(emailTransactionalMessageData);

  return new Response(JSON.stringify({ message: "Great Success!" }));
}
