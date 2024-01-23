import { RoundType } from "../libs/DefineType"

async function getRounds() {
    const postData: RequestInit = {
        method: "GET",
        // cache: "no-cache",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch('http://localhost:3000/api/round', postData)
    if (!res.ok) {
        throw new Error("cannot fetch")
    }
    return res.json()
}

type props = {
    name: string;
    idround: number
}

export default async function Round({ name, idround }: props) {
    const rounds = await getRounds()
    return (
        <select name={name}  defaultValue={idround} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-40 ">
            {rounds.round.map((round: RoundType, index: number) => (
                <option key={index} value={round.idround} > {round.name} </option>
            )
            )}
        </select>


    )
}
