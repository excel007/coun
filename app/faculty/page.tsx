import pool from "../libs/mysql"
import { FacultyType, RoundType } from "../libs/DefineType"

import Link from "next/link"
import { RowDataPacket } from "mysql2"
import { redirect } from "next/navigation"

export default async function Faculty() {

    const [rows] = await pool.execute('select faculty.idfaculty , faculty.name , faculty.total , round.name round_name from faculty join round on (faculty.idround = round.idround) order by faculty.idfaculty')


    return (
        <div>
            <h1 className="text-2xl">รายชื่อหน่วยงาน</h1>
            {/* <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 ml-2 border border-blue-700 rounded" > เพิ่ม </button> */}
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 ml-2 border border-blue-700 rounded" onClick={() => {redirect("/faculty/update")}} > แก้ไข </button> */}
            <div>
                <Link href={"/faculty/create"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 ml-2 border border-blue-700 rounded"> เพิ่ม </Link>
                <Link href={"/faculty/update"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 ml-2 border border-blue-700 rounded"> แก้ไข </Link>
            </div>
            <ul className="list-disc">
                {rows.map((faculty: RowDataPacket, index: number) => (
                    <li key={index}>
                        {faculty.name} : {faculty.total} ราย | รอบ {faculty.round_name}
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py- px-4 ml-2 border border-red-700 rounded" > ลบ </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}