
import { useQuery,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useSuperHeroDetail = (id) =>{
    const queryClient = useQueryClient()

    return useQuery({
    
    queryKey: ['superherodetail',id],
    queryFn: () =>
        axios.get(`http://localhost:4000/superheroes/${id}`).then((res) => res.data),
    initialData: () => {

        const superheros = queryClient.getQueryData(['superherodata'])
        return superheros?.find((superhero) => superhero.id ===parseInt(id))
    }



})
}