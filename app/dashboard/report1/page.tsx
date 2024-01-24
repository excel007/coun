import pool from "@/app/libs/mysql"
import useSWR from 'swr'

export default async function page() {

    return (
        <div>
            <h1 className="text-2xl">Dashboard</h1>
            <div>จำนวนทั้งหมด {total} ราย</div>
            <div>ปัจจุบัน {current} ราย</div>
        </div>
    )
}
