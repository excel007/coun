'use client'
import Link from "next/link"
import Round from "@/app/components/Round"
import { submitForm } from "./action" 

export default function Create() {
    return (
        <div>

            <h1 className="text-2xl">เพิ่มหน่วยงาน</h1>
            <div>
                <Link href={"/faculty"} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py- px-4 ml-2 border border-yellow-700 rounded"> ย้อนกลับ </Link>
            </div>
            <div>
                <form action={submitForm}>

                    <div>
                        หน่วยงาน :
                        <input type="text" name='name' className='rounded border m-1 w-64' placeholder="ใสชื่อหน่วยงาน" required />
                    </div>
                    <div>
                        จำนวนเข้ารับ :
                        <input type="text" name='total' className='rounded border m-1 w-32' placeholder="ใสจำนวนบัณฑิต" required />
                    </div>
                    <div>
                        รอบที่เข้ารับ :
                        <Round name="idround" idround={0} />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 ml-2 border border-blue-700 rounded"> บันทึก </button>
                    <Link href={"/faculty"} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py- px-4 ml-2 border border-yellow-700 rounded"> ย้อนกลับ </Link>
                </form>
            </div>
        </div>
    )
}
