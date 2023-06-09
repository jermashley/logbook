import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getNowPlaying = async () => {
  const data = await axios.get(`/spotify/now-playing`)

  return data
}

export const useNowPlaying = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`spotify`, `now-playing`],
    queryFn: getNowPlaying,

    select: ({ data }) => data,

    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,

    ...config,
  })
