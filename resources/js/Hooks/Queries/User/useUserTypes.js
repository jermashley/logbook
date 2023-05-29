import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getUserTypes = async () => {
  const data = await axios.get(`/api/user/types`)

  return data
}

export const useUserTypes = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`userTypes`],
    queryFn: getUserTypes,

    select: ({ data }) => data,

    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    ...config,
  })
