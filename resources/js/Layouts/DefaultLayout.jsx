import { Footer } from '@Components/UI/Footer'
import { Navigation } from '@Components/UI/Navigation'

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="mx-auto my-6 w-full max-w-2xl grow">{children}</main>

      <Footer />
    </div>
  )
}

export default DefaultLayout
