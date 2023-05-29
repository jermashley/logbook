import { AppContextProvider } from '@Contexts/AppContextProvider'
import { createInertiaApp } from '@inertiajs/react'
import DefaultLayout from '@Layouts/DefaultLayout'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob(`./Pages/**/*.jsx`, { eager: true })

    let page = pages[`./Pages/${name}.jsx`]

    page.default.layout = (page) => (
      <AppContextProvider>
        <DefaultLayout>{page}</DefaultLayout>
      </AppContextProvider>
    )

    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    )
  },
})
