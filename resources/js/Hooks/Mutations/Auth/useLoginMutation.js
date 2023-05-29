import { router } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const login = async (formData = {}) => {
  const data = await axios.post(`/auth/login`, {
    ...formData,
  })

  return data
}

export const useLoginMutation = ({ config = {} } = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ formData = {} } = {}) => login(formData),

    onSuccess: () => {
      queryClient.invalidateQueries([`user`])
      router.visit(`/dashboard`)
      notifications.show({
        title: `Successfully logged in`,
        message: `Welcome back! 😀`,
        color: `green`,
      })
    },

    ...config,
  })
}
