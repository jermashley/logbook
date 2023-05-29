import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getSubjects = async () => {
  return await axios.get(`/api/subject`)
}

export const useSubjectsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`subjects`],
    queryFn: getSubjects,

    select: ({ data }) => {
      //sort array of objects by property type, then by property teacher_id, then alphabetically by property name
      data.sort((a, b) => {
        if (a.type < b.type) {
          return -1
        }
        if (a.type > b.type) {
          return 1
        }
        if (a.teacher_id < b.teacher_id) {
          return -1
        }
        if (a.teacher_id > b.teacher_id) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }

        return 0
      })

      return data
    },

    ...config,
  })
