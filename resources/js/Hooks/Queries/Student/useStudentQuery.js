import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getStudent = async (uuid) => {
  const data = await axios.get(`/api/student/${uuid}`)

  return data
}

export const useStudentQuery = ({ uuid = undefined, config = {} } = {}) =>
  useQuery({
    queryKey: [`student`, uuid],
    queryFn: () => getStudent(uuid),

    select: ({ data }) => data,

    ...config,
  })
