import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";
import { redirect } from "next/navigation"

export async function GET(request: Request) {
    try {

        const query = 'select * from round'
        const [rows] = await pool.execute(query)

        return NextResponse.json({ round: rows })

    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}