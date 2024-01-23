'use client'

import { useState, useEffect } from 'react'

export default  function Page() {
     
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const fetchCount = async () => {
          try {
            const res = await fetch('/api/counter');
            const data = await res.json();
            setCounter(data.current);
          } catch (error) {
            console.error(error);
          }
        };
        fetchCount();
      }, []);
    

    // const handleUp = () => {
    //     setCounter(counter + 1)
    // }
    const handleUp = async () => {
        try {
          const res = await fetch('/api/counter', {
            method: 'POST',
            body: JSON.stringify({ action: 'up' }),
          });
          const data = await res.json();
          setCounter(data.current);
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleDown = async () => {
        try {
          const res = await fetch('/api/counter', {
            method: 'POST',
            body: JSON.stringify({ action: 'down' }),
          });
          const data = await res.json();
          setCounter(data.current);
        } catch (error) {
          console.error(error);
        }
      };


    // const initialize = () => {
    //     const getCurrent = async () => {
    //         const data = await fetch('/api/counter')
    //         const response = await data.json()
    //         console.log('init')
    //         console.log(response[0]['current'])
    //         return (response[0]['current'])
    //     }
    // }



    return (
        <div className='items-center text-center p-10'>
            <div className='text-lg '>Counter</div>
            <div className='text-2xl p-5'>
            {counter}
            </div>
            {/* {console.log(cc['current'])} */}
            <div>
                <button onClick={handleUp} className='bg-blue-400 hover:bg-blue-600 rounded p-2'>UP</button>
            </div>
            <div>
                <button onClick={handleDown} className='bg-red-400 hover:bg-red-600 rounded p-2'>DOWN</button>
            </div>

        </div>
    )
}