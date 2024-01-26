"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { admin, db } from "../../../../firebase.config";

export async function POST(req: NextApiRequest) {
  console.log(db.collection("messages").count());
  return new Response(JSON.stringify({ message: "Great Success!" }));
}
