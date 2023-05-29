import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getStudents = async () => {
  const data = await axios.get(`/api/student`)

  return data
}

export const useStudentsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`students`],
    queryFn: getStudents,

    select: ({ data }) => data,

    ...config,
  })
