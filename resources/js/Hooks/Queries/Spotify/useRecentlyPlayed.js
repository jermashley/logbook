import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getRecentlyPlayed = async () => {
  const data = await axios.get(`/spotify/recently-played`)

  return data
}

export const useRecentlyPlayed = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`spotify`, `recently-played`],
    queryFn: getRecentlyPlayed,

    select: ({ data }) => data,

    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,

    ...config,
  })
