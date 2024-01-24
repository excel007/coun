import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";
import { redirect } from "next/navigation"

export async function GET(request: Request) {
    try {
        const [rowTotal] = await pool.execute('select sum(total) total from faculty')
        const total = rowTotal[0].total

        const [rowCurrent] = await pool.execute('select current from counter')
        const current = rowCurrent[0].current

        return NextResponse.json({ round: rows })

    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}