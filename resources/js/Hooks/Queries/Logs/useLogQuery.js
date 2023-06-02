import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getLog = async (id) => {
  const { data } = await axios.get(`/api/collections/log/entries/${id}`)

  return data
}

export const useLogQuery = ({ id, config = {} } = {}) =>
  useQuery({
    queryKey: [`log`, id],
    queryFn: () => getLog(id),
    select: ({ data }) => data,

    ...config,
  })
