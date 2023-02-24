import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    jp: "超鬼畜！激辛ボム兵スピンジャンプ　Bomb Spin Jump",
  })
}
