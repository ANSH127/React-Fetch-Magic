
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useSuperHeroDetail = (id) =>useQuery({
    queryKey: ['superherodetail',id],
    queryFn: () =>
        axios.get(`http://localhost:4000/superheroes/${id}`).then((res) => res.data),

})