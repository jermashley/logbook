import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getMyProfile = async () => {
  const data = await axios.get(`/spotify/me`)

  return data
}

export const useMyProfile = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`spotify`, `me`],
    queryFn: getMyProfile,

    select: ({ data }) => data,

    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,

    ...config,
  })
