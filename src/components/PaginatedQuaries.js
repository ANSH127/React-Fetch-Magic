import React from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export default function PaginatedQuaries() {
    const [page, setPage] = React.useState(1)



    const { data, isLoading, error } = useQuery({
        queryKey: ['paginatedquaries', page],
        queryFn: () =>
            axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}
            `).then((res) => res.data),
        keepPreviousData: true,
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Something went wrong</div>

    return (
        <>
            <div>
                PaginatedQuaries
                {
                    data?.map((color) => (
                        <div key={color.id}>
                            {color.label}
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>Previous Page</button>
                <span>{page}</span>
                <button onClick={() => setPage((old) => old + 1)} disabled={data?.length < 2}>Next Page</button>


            </div>
        </>
    )
}
