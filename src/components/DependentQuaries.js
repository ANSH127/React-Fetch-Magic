import React from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function DependentQuaries({email}) {

    const { data: user } = useQuery({
        queryKey: ['user',email],
        queryFn: () =>
            axios.get(`http://localhost:4000/users/${email}`).then((res) => res.data),

    })
    const channelId = user?.channelId

    const { data: channel } = useQuery({
        queryKey: ['channel',channelId],
        queryFn: () =>
            axios.get(`http://localhost:4000/channels/${channelId}`).then((res) => res.data),
        
        enabled: !!channelId,

    })

    


  return (
    <div>DependentQuaries</div>
  )
}
