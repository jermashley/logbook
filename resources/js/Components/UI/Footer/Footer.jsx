import { faHeart } from '@fortawesome/pro-duotone-svg-icons'
import { faCopyright } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-2xl flex-col items-center justify-start space-y-1 px-0 py-4">
      <p className="text-center text-xs">
        Made with{` `}
        <FontAwesomeIcon icon={faHeart} className="mx-1 text-rose" fixedWidth />
        {` `}
        in Missouri
      </p>

      <p className="text-center text-xs">
        <FontAwesomeIcon icon={faCopyright} className="mr-1" fixedWidth />
        {new Date().getFullYear()} Jeremiah Ashley
      </p>

      <p className="text-center text-[0.625rem] text-text/60">
        Theme by{` `}
        <a
          href="https://rosepinetheme.com/"
          className="text-love underline"
          target="_blank"
          rel="noreferrer"
        >
          Rosé Pine
        </a>
      </p>
    </footer>
  )
}
