import { Footer } from '@Components/UI/Footer'
import { Navigation } from '@Components/UI/Navigation'

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />

      <main className="mx-auto mb-6 mt-12 w-full max-w-2xl grow px-4 md:px-0 lg:mt-16">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default DefaultLayout
