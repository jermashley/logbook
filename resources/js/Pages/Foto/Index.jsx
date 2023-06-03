import { faClone } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@inertiajs/react'
import { useDocumentTitle } from '@mantine/hooks'

const FotoIndexPage = ({ entries }) => {
  useDocumentTitle(`Foto | Jeremiah Ashley`)

  return (
    <>
      {entries.length === 0 ? (
        <p className="text-center text-xl text-text/50">
          Nothing to see here...yet.
        </p>
      ) : null}

      {entries.length >= 1 ? (
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {entries?.map((entry) => (
            <Link
              key={entry.id}
              href={`/foto/${entry.id}`}
              className="group relative aspect-square overflow-hidden outline outline-4 outline-transparent transition-all duration-200 hover:outline-text/50"
            >
              {entry.media.length >= 2 ? (
                <FontAwesomeIcon
                  icon={faClone}
                  className="absolute right-3 top-3 z-10 text-xl text-white shadow-md"
                  fixedWidth
                />
              ) : null}

              <img
                src={entry.media[0].url}
                className="aspect-square h-full w-full scale-100 object-cover brightness-[0.85] transition-all duration-500 group-hover:scale-[1.075] group-hover:brightness-[1.1]"
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
