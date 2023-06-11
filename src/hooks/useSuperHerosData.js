
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useSuperHerosData = (onSuccess,onError) =>useQuery({
    queryKey: ['superherodata'],
    queryFn: () =>
      axios.get('http://localhost:4000/superheroes').then((res) => res.data),
    // staleTime: 20000, //it means it will pause the request for 20 seconds
    // refetchOnMount:true, //it means it will refetch the data when the component mounts
    // refetchOnWindowFocus:true, //it means it will refetch the data when the window is in focus
    // refetchInterval:2000, //it means it will refetch the data every 2 seconds
    // refetchIntervalInBackground:true, //it means it will refetch the data every 2 seconds even if the window is not in focus
    enabled:false, //it means it will not fetch the data when the component mounts
    onSuccess:onSuccess, //it means it will perform some action when the data is fetched successfully
    onError:onError, //it means it will perform some action when the data is not fetched successfully
    
    
  })

  export const useAddSuperHero = () =>{
  const queryClient=useQueryClient()
    
   return useMutation({
    mutationFn: (data) =>
      axios.post('http://localhost:4000/superheroes',data),
    onSuccess:()=>queryClient.invalidateQueries({queryKey:['superherodata']}),
    onError:()=>console.log('data not added successfully'),

  })
}

