import { FacultyType, RoundType } from "../../libs/DefineType"
import { useFormState } from "react-dom";
import { submitForm } from "./action"
import Round from "../../components/Round";
async function getFaculty() {
    const postData: RequestInit = {
        method: "GET",
        // cache: "no-cache",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch('http://localhost:3000/api/faculty', postData)
    if (!res.ok) {
        throw new Error("cannot fetch")
    }
    return res.json()
}

export default async function Faculty() {
    const initialState = {
        message: '',
    }

    const faculties = await getFaculty()

    return (
        <div>
            <div>หน่วยงาน</div>

            {faculties.faculty.map((faculty: FacultyType, index: number) => (
                <form key={index} action={submitForm}>
                    <div>
                        
                        หน่วยงาน :
                        <input type="text" name='name' className='rounded border m-1 w-64' defaultValue={faculty.name} required />
                        จำนวนเข้ารับ :
                        <input type="text" name='total' className='rounded border m-1 w-32' defaultValue={faculty.total} required />
                        <input type="hidden" name="idfaculty" defaultValue={faculty.idfaculty} />
                        
                        <Round name="idround" idround={faculty.idround} />

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 ml-2 border border-blue-700 rounded" > บันทึก </button>
                    </div>
                </form>
            ))}



        </div>
    )
}
