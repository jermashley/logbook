import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getSubjectTypes = async () => {
  return await axios.get(`/api/subject/types`)
}

export const useSubjectTypesQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`subject-types`],
    queryFn: getSubjectTypes,

    select: ({ data }) => data,

    ...config,
  })
