import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getUser = async () => {
  const data = await axios.get(`/api/user`)

  return data
}

export const useUserQuery = ({ config = {} } = {}) =>
  useQuery({
    queryFn: () => getUser(),
    queryKey: [`user`],

    select: ({ data }) => data,

    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: false,

    ...config,
  })
