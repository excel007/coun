import { RoundType } from "../libs/DefineType"
import { useFormState } from "react-dom";
import { submitForm } from "./action"

async function getRounds() {
    const postData: RequestInit = {
        method: "GET",
        // cache: "no-cache",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json"
        }
    }
        
    const res = await fetch('http://localhost:3000/api/round',postData)
    if (!res.ok) {
        throw new Error("cannot fetch")
    }
    return res.json()
}

export default async function Round() {
    const initialState = {
        message: '',
    }

    const rounds = await getRounds()

    return (
        <div>
            <div>Round</div>

            {rounds.round.map((round: RoundType, index: number) => (
                <form key={index} action={submitForm}>
                    <div>
                        รอบ :
                        <input type="text" name='name' className='rounded border m-4 w-64' defaultValue={round.name} required />
                        จำนวนเข้ารับ :
                        <input type="text" name='total' className='rounded border m-4 w-32' defaultValue={round.total} required />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" > บันทึก </button>
                        <input type="hidden" name="idround" defaultValue={round.idround} />
                    </div>
                </form>
            ))}



        </div>
    )
}
