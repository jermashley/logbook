import { ComposeComponents } from '@Components/ComposeComponents'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { NavigationContextProvider } from './NavigationContextProvider'

const queryClient = new QueryClient()

export const AppContextProvider = ({ children }) => {
  const providers = [NavigationContextProvider]

  return (
    <QueryClientProvider client={queryClient}>
      {[`local`, `qa`].includes(import.meta.env.VITE_APP_ENV) ? (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      ) : null}
      <ComposeComponents components={[...providers]}>
        {children}
      </ComposeComponents>
    </QueryClientProvider>
  )
}
