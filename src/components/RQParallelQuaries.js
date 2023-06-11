import React from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'



export default function RQParallelQuaries() {
  const { isLoading, error, data: superHeros } = useQuery({
    queryKey: ['superheros'],
    queryFn: () =>
      axios.get('http://localhost:4000/superheroes').then((res) => res.data),
  })
  
  const { isLoading: isLoading2, error: error2, data: friends } = useQuery({
    queryKey: ['friends'],
    queryFn: () =>
      axios.get('http://localhost:4000/friends').then((res) => res.data),
  })
  

  if (isLoading || isLoading2) return <div>Loading...</div>
  if (error || error2) return <div>Something went wrong...</div>

  console.log(superHeros)
  console.log(friends)
  return (
    <div>RQParallelQuaries</div>
  )
}
