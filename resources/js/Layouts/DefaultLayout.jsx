import { Navigation } from '@Components/UI/Navigation'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />

      {children}
    </>
  )
}

export default DefaultLayout
