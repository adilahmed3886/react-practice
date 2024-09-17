import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center mt-[30vh]'>
        <h1 className='text-3xl'>{data.followers}</h1>
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const apiData = async () => {
    const response = await fetch('https://api.github.com/users/adilahmed3886')
    return response.json()
}