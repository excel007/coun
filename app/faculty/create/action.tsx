'use server'

import { redirect } from "next/navigation"
import { FacultyType } from "../../libs/DefineType"
import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function submitForm(formData: FormData) {
    const idround = formData.get("idround")
    const name = formData.get("name")
    const total = formData.get("total")


    const query = 'insert into faculty(`name`,`total`,`idround`) values (?,?,?)'
    const [rows] = await pool.query(query, [name, total, idround])

    if (rows['affectedRows'] == 1) {
        redirect('/faculty')
    } else{
        redirect('/faculty')
    }
        




}