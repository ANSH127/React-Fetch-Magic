import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroDetail } from '../hooks/useSuperHeroDetail'
export default function RQSuperHeroDetail() {
    const { id } = useParams()
    const { isLoading, error, data } = useSuperHeroDetail(id)
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

  return (
    <div>RQSuperHeroDetail
        <h1>{data.name}-{data.alterEgo}</h1>



    </div>
  )
}
