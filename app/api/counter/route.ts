import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET(request: Request) {
    try {
        const db = await pool.getConnection()
        const query = 'select current from counter'
        const [rows] = await db.execute(query)
        db.release()

        return NextResponse.json({ current: rows[0].current })
        // return NextResponse.json({ rows })
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const action = await request.json()
        console.log(action['action'])
        if (action['action'] === 'up') {
            const query = 'UPDATE counter SET current = current + 1 '
            await pool.query(query)
        } else if (action['action'] === 'down') {
            const query = 'UPDATE counter SET current = current - 1 '
            await pool.query(query)
        } else {
            console.log('xxxxxxxxxxxx')
            return NextResponse.json({ error: 'Invalid action' })
        }

        const [rows] = await pool.execute('select current from counter')


        return NextResponse.json({ current: rows[0].current })
        // return NextResponse.json({ current: 1 })

        // return NextResponse.json({ rows })
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}