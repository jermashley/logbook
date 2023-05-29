import { router } from '@inertiajs/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const storeStudent = async (formData) => {
  const data = await axios.post(`/api/student`, formData)

  return data
}

export const useStoreStudentMutation = ({ config = {} } = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    queryMethod: ({ formData = {} } = {}) => storeStudent(formData),

    onSuccess: () => {
      queryClient.invalidateQueries(`students`)

      router.visit(`/student`)
    },

    ...config,
  })
}
