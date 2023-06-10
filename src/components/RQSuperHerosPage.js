import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function RQSuperHerosPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['superherodata'],
    queryFn: () =>
      axios.get('http://localhost:4000/superheroes').then((res) => res.data),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
    <>
    <div>RQSuperHerosPage</div>
    {
      data.map((item) => {
        return <div key={item.id}>
          <h1>{item.name}</h1>
        </div>


      })

      }
    
    </>

  )
}
