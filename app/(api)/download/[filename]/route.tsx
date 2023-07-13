import { NextResponse } from "next/server";


export const GET = async (
  request: Request,
  { params }: { params: { filename: string } }
) => {
  let response = new NextResponse("Hello");
  return response;
};
