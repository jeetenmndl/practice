import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

export async function POST(req, res) {

  const { userID } = await req.json();
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;

  console.log(apiKey,apiSecret);

  if (!userID) {
    return NextResponse.json({ success:false, message: "Missing userID" }, { status: 400 });
  }

  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const token = serverClient.createToken(userID);

  return NextResponse.json({ success:true,  token: token });

}
