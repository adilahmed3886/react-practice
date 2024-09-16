import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/adilahmed3886')
        .then((res) => res.json())
        .then((res) => setData(res))
    
    }, [])

  return (
    <div className='flex flex-col items-center text-center m-4 text-black rounded-2xl p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="" className='w-[300px] rounded-3xl '/>
    </div>
  )
}

export default Github