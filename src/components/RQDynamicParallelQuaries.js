import React from 'react'
import { useQueries } from '@tanstack/react-query'
import axios from 'axios'

export default function RQDynamicParallelQuaries({ idlist }) {
    // console.log(idlist);
    const  QueryResult  = useQueries({
        queries: idlist.map((id) => ({
            queryKey: ['superheros', id],
            queryFn: () =>
                axios
                    .get(`http://localhost:4000/superheroes/${id}`)
                    .then((res) => res.data),
        })),


    })
    console.log(QueryResult);
    return (
        <div>RQDynamicParallelQuaries</div>
    )
}
