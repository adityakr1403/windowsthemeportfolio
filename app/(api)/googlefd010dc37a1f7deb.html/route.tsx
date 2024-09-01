import { NextResponse } from "next/server";


export const GET = async (
  request: Request,
  { params }: { params: { filename: string } }
) => {
  let response = new NextResponse("google-site-verification: googlefd010dc37a1f7deb.html");
  return response;
};
