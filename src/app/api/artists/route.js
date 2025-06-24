import { NextResponse } from "next/server";
import artists from "@/data/artists.json";

export async function GET() {
  return NextResponse.json(artists);
}