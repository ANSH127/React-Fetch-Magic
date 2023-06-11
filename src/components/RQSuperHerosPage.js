import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function RQSuperHerosPage() {
  const { isLoading, error, data,refetch } = useQuery({
    queryKey: ['superherodata'],
    queryFn: () =>
      axios.get('http://localhost:4000/superheroes').then((res) => res.data),
    // staleTime: 20000, //it means it will pause the request for 20 seconds
    // refetchOnMount:true, //it means it will refetch the data when the component mounts
    // refetchOnWindowFocus:true, //it means it will refetch the data when the window is in focus
    // refetchInterval:2000, //it means it will refetch the data every 2 seconds
    // refetchIntervalInBackground:true, //it means it will refetch the data every 2 seconds even if the window is not in focus
    enabled:false //it means it will not fetch the data when the component mounts
    
  })

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
          <h1>{item.name}</h1>
        </div>


      })

      }
    
    </>

  )
}
