import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";
import { redirect } from "next/navigation"

export async function GET(request: Request) {
    try {

        const query = 'select * from faculty order by idfaculty'
        const [rows] = await pool.execute(query)

        return NextResponse.json({ faculty: rows })

    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}

export async function PUT(request: Request) {
    try {
        const action = await request.json()
            const query = 'UPDATE faculty SET ? where ?'
            await pool.query(query,[])
        

        const [rows] = await pool.execute('select * from faculty')


        return NextResponse.json({ faculty: rows })
        // return NextResponse.json({ current: 1 })

        // return NextResponse.json({ rows })
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}