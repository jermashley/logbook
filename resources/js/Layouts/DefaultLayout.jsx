import { Navigation } from '@Components/UI/Navigation'
import { faHeart } from '@fortawesome/pro-duotone-svg-icons'
import { faCopyright } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="mx-auto my-6 w-full max-w-2xl grow">{children}</main>

      <footer className="mx-auto flex max-w-2xl flex-col items-center justify-start space-x-2 px-0 py-4">
        <p className="text-center text-xs">
          Made with{` `}
          <FontAwesomeIcon icon={faHeart} className="text-rose" fixedWidth /> in
          Missouri
        </p>

        <p className="text-center text-xs">
          <FontAwesomeIcon icon={faCopyright} fixedWidth />
          {` `}
          {new Date().getFullYear()} Jeremiah Ashley
        </p>
      </footer>
    </div>
  )
}

export default DefaultLayout
