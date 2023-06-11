import React from 'react'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
import {useSuperHerosData} from '../hooks/useSuperHerosData'
import { Link } from 'react-router-dom'

export default function RQSuperHerosPage() {

  const onSuccess=(data)=>{
    console.log('perform some action when the data is fetched successfully',data)
  }
  const onError=(error)=>{
    console.log('perform some action when the data is not fetched successfully',error)
  }
  const { isLoading, error, data,refetch } = useSuperHerosData(onSuccess,onError)

  // if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
    <>
    <div>RQSuperHerosPage</div>
    <button onClick={refetch}>
      Refetch

    </button>
    {
      data?.map((item) => {
        return <div key={item.id}>
          <Link to={`/rq-super-heros/${item.id}`}>
          <h1>{item.name}</h1>
          </Link>
        </div>


      })

      }
    
    </>

  )
}
