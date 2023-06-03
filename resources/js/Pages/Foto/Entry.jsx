import { faAngleLeft, faAngleRight } from '@fortawesome/pro-duotone-svg-icons'
import { faCircle as faCircleRegular } from '@fortawesome/pro-regular-svg-icons'
import { faCircle as faCircleSolid } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDocumentTitle } from '@mantine/hooks'
import dayjs from 'dayjs'
import Carousel from 'nuka-carousel'

const FotoEntryPage = ({ entry }) => {
  const documentTitleFromCaption = entry.caption
    ? entry.caption.slice(0, 50)
    : dayjs(entry.date).format(`MMM DD, YYYY`)

  useDocumentTitle(`${documentTitleFromCaption} | Jeremiah Ashley`)

  return (
    <article>
      <Carousel
        className="h-[calc(100vh/3*2)] max-h-[100vw] w-full bg-overlay"
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="mx-4 flex aspect-square flex-row items-center justify-center rounded-md border border-highlightHigh bg-overlay/80 px-1 py-2"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-lg text-text"
              fixedWidth
            />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="mx-4 flex aspect-square flex-row items-center justify-center rounded-md border border-highlightHigh bg-overlay/80 px-1 py-2"
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-lg text-text"
              fixedWidth
            />
          </button>
        )}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide,
        }) => (
          <div className="absolute left-0 right-0 top-full flex w-full flex-row items-center justify-center border-t border-t-highlightMed bg-overlay">
            <ul className="flex flex-row items-center justify-center py-2">
              {[...Array(slideCount)].map((e, key) => (
                <li
                  key={key}
                  className="flex flex-row items-center justify-center"
                >
                  <button
                    type="button"
                    aria-label="slide 1 bullet"
                    className="flex flex-row items-center justify-center p-1"
                    onClick={() => goToSlide(key)}
                  >
                    <FontAwesomeIcon
                      icon={
                        currentSlide == key ? faCircleSolid : faCircleRegular
                      }
                      className={`text-[0.5rem] ${
                        currentSlide == key ? `text-love` : `text-text`
                      }`}
                      fixedWidth
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        vertical
      >
        {entry.media.map((media) => (
          <img
            key={media.id}
            src={media.url}
            alt=""
            className="h-full w-full object-contain"
          />
        ))}
      </Carousel>

      <p className="mt-12 text-xs tracking-wide text-text/70">
        {dayjs(entry.date).format(`MMM DD, YYYY`)}
      </p>

      {entry.caption ? (
        <p className="mt-4 text-base text-text">{entry.caption}</p>
      ) : null}
    </article>
  )
}

export default FotoEntryPage
