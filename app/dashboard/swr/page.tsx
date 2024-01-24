'use client'
import useSWR from "swr"

// const url: string = 'http://192.168.1.116:3000/api/counter'
const url: string = 'http://localhost:3000/api/counter'
const fetcher = (url: string) => fetch(url).then(res => res.json())
const options = {
    refreshInterval : 1000
}
function page() {
    // const { data, error, isLoading } = useSWR(url, fetcher )
    const { data, error, isLoading } = useSWR(url, fetcher, options)
    console.log(data)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // render data
    return (
        <div>
            {data.current}
            {/* {data.faculty.map((d,index) => (<div>{d.name}</div>))} */}
        </div>
    )
}

export default page 