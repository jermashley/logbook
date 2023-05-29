import { router } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const destroySubject = (uuid) => {
  return axios.delete(`/api/subject/${uuid}`)
}

export const useDestroySubjectMutation = ({ config = {} } = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ uuid = null } = {}) => destroySubject(uuid),

    onSuccess: () => {
      queryClient.invalidateQueries([`subjects`])

      notifications.show({
        title: `Subject deleted`,
        color: `red`,
      })

      router.visit(`/subject`)
    },

    ...config,
  })
}
