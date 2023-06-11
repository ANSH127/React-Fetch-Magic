import React from 'react'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
import {useSuperHerosData,useAddSuperHero} from '../hooks/useSuperHerosData'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function RQSuperHerosPage() {
  const [mydata, setMydata] = useState({
    name:'',
    alterEgo:''
  })
  const {mutate}=useAddSuperHero()

  const handleClick=()=>{
    mutate(mydata)

  }


  const onSuccess=(data)=>{
    console.log('perform some action when the data is fetched successfully',data)
  }
  const onError=(error)=>{
    console.log('perform some action when the data is not fetched successfully',error)
  }
  // eslint-disable-next-line
  const { isLoading, error, data,refetch } = useSuperHerosData(onSuccess,onError)

  // if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  // console.log(data)
  return (
    <>
    <div>RQSuperHerosPage</div>
    <div>
      <input type="text" value={mydata.name}
      onChange={(e)=>setMydata({...mydata,name:e.target.value})}/>
      <input type="text" value={mydata.alterEgo}
      onChange={(e)=>setMydata({...mydata,alterEgo:e.target.value})}/>
      <button onClick={handleClick}>Add Hero</button>



    </div>
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
