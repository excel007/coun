'use server'
import { redirect } from "next/navigation"
import { FacultyType } from "../../libs/DefineType"
import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function submitForm(formData: FormData) {
    console.log(formData.get("idfaculty"))
    const idround = formData.get("idround")
    const name  = formData.get("name")
    const total  = formData.get("total")
    const idfaculty = formData.get("idfaculty")

    try {
        const query = 'UPDATE faculty SET name = ? , total = ? ,idround = ? where idfaculty = ? '
        await pool.query(query,[name,total,idround,idfaculty])

    } catch (error) {
        console.log('error')
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }


}