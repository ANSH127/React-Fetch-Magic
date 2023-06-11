import React from 'react'



import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
export default function InfiniteQueries() {

    const { data, isLoading, error,fetchNextPage,hasNextPage,isFetching,isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['infinitequaries'],
        queryFn: ({pageParam=1}) =>
            axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`).then((res) => res.data),
        
        
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 2) {
                return false
            }
            return pages.length + 1
        }

    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Something went wrong</div>

  return (
    <>
        <div>
            InfiniteQuaries
            {
                data?.pages.map(
                    (group, i) => (
                        <React.Fragment key={i}>
                            {group.map((color) => (
                                <div key={color.id}>{color.label}</div>
                            ))}
                        </React.Fragment>
                    )
                )
                
            }
        </div>

        <div>
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>

        </div>
        <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>


    </>
  )
}
