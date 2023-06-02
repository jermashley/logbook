import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getLogs = async () => {
  const { data } = await axios.get(`api/collections/log/entries`)

  return data
}

export const useLogsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`logs`],
    queryFn: getLogs,
    select: ({ data }) => data,

    ...config,
  })
