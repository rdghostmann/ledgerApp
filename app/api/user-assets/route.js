import { NextResponse } from "next/server";
import getUserAssets from "@/controllers/getUserAssets";

export async function GET() {
  try {
    const data = await getUserAssets();
    return NextResponse.json({ assets: data.assets || [] });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}