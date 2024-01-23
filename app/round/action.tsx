'use server'
import { redirect } from "next/navigation"
import { RoundType } from "../libs/DefineType"
import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function submitForm(formData: FormData) {
    console.log(formData.get("idround"))
    const idround = formData.get("idround")
    const name  = formData.get("name")
    const total  = formData.get("total")


    try {
        const query = 'UPDATE round SET name = ? , total = ? where idround = ? '
        await pool.query(query,[name,total,idround])

    } catch (error) {
        console.log('error')
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }


}