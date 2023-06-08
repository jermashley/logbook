import { faClone, faThumbTack } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@inertiajs/react'
import { useDocumentTitle } from '@mantine/hooks'

const FotoIndexPage = ({ entries }) => {
  useDocumentTitle(`Foto | Jeremiah Ashley`)

  const featuredEntries = entries.filter((entry) => entry.featured)
  const regularEntries = entries.filter((entry) => !entry.featured)

  const orderedEntries = [...featuredEntries, ...regularEntries]

  return (
    <>
      {entries.length === 0 ? (
        <p className="text-center text-xl text-text/50">
          Nothing to see here...yet.
        </p>
      ) : null}

      {entries.length >= 1 ? (
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {orderedEntries?.map((entry) => (
            <Link
              key={entry.id}
              href={`/foto/${entry.id}`}
              className="group relative aspect-square overflow-hidden outline outline-4 outline-transparent transition-all duration-200 hover:outline-text/50"
            >
              <div className="absolute right-3 top-3 z-10 flex flex-row items-center justify-center space-x-2">
                {entry.featured ? (
                  <FontAwesomeIcon
                    icon={faThumbTack}
                    className="text-base text-white drop-shadow-md"
                    fixedWidth
                  />
                ) : null}

                {entry.media.length >= 2 ? (
                  <FontAwesomeIcon
                    icon={faClone}
                    className="text-base text-white drop-shadow-md"
                    fixedWidth
                  />
                ) : null}
              </div>

              <img
                src={entry.media[0].url}
                className="aspect-square h-full w-full scale-100 object-cover brightness-[0.85] transition-all duration-500 group-hover:scale-[1.075] group-hover:brightness-[1]"
                alt=""
              />
            </Link>
          ))}
        </section>
      ) : null}
    </>
  )
}

export default FotoIndexPage
