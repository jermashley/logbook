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

    select: ({ data }) => {
      let uniqueRecentlyPlayed = data.items.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.track.id === current.track.id)) {
          accumulator.push(current)
        }

        return accumulator
      }, [])

      return {
        ...data,
        items: uniqueRecentlyPlayed,
      }
    },

    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,

    ...config,
  })
