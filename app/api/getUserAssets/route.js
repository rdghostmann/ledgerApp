import { NextResponse } from "next/server";
import getUserAssets from "@/controllers/getUserAssets";

export async function GET() {
  try {
    const assets = await getUserAssets();
    return NextResponse.json(assets);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}