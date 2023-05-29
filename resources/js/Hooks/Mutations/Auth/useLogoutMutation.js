import { router } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const logout = async () => {
  const data = await axios.post(`/auth/logout`)

  return data
}

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => logout(),

    onSuccess: (data) => {
      queryClient.clear()
      router.visit(`/`)
      notifications.show({
        title: `Successfully logged out`,
        message: `See you again soon!`,
        color: `red`,
      })
    },
  })
}
