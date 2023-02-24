import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ jp: "平仮名送り仮名振り仮名" })
}
