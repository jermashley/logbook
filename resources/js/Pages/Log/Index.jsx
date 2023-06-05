import { faThumbTack } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@inertiajs/react'
import { useDocumentTitle } from '@mantine/hooks'
import { cn } from '@Utils/cn'
import dayjs from 'dayjs'

const LogIndexPage = ({ entries }) => {
  useDocumentTitle(`Log | Jeremiah Ashley`)

  const featuredEntries = entries.filter((entry) => entry.featured)
  const nonFeaturedEntries = entries.filter((entry) => !entry.featured)

  return (
    <>
      {entries.length === 0 ? (
        <p className="text-center text-xl text-text/50">
          Nothing to see here...yet.
        </p>
      ) : null}

      {featuredEntries.length >= 1 ? (
        <section
          className={cn(
            `grid grid-cols-1 gap-2 space-y-2 ${
              featuredEntries.length === 2 ? `lg:grid-cols-2` : ``
            }`,
          )}
        >
          {featuredEntries?.map((entry) => (
            <Link
              key={entry.id}
              href={`/log/${entry.slug}`}
              className="group transform-gpu overflow-hidden rounded-md border border-highlightMed bg-surface shadow-none transition-all duration-200 hover:border-highlightHigh hover:shadow-xl"
              style={{ backfaceVisibility: `hidden` }}
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={entry.hero.url}
                  className="h-full w-full scale-100 object-cover brightness-[0.85] transition-all duration-500 group-hover:scale-[1.075] group-hover:brightness-[1]"
                  alt=""
                />
              </div>

              <div className="mt-4 flex flex-col space-y-2 px-4 py-4">
                <h3 className="text-xl font-semibold underline decoration-2 underline-offset-2 group-hover:text-love">
                  {entry.title}
                </h3>

                <div className="flex flex-row items-center justify-start space-x-2">
                  <p className="text-xs tracking-wide text-text/70">
                    {dayjs(entry.date).format(`MMM DD, YYYY`)}
                  </p>

                  {entry.featured ? (
                    <div className="flex flex-row items-center justify-center rounded-md bg-love/75 px-[0.375rem] py-[0.125rem]">
                      <p className="text-[0.625rem] tracking-wider text-surface">
                        Featured
                      </p>
                    </div>
                  ) : null}
                </div>

                {entry.summary ? (
                  <p className="text-sm leading-normal tracking-wide">
                    {entry.summary}
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </section>
      ) : null}

      {nonFeaturedEntries.length >= 1 ? (
        <section className="flex flex-col space-y-2">
          {nonFeaturedEntries?.map((entry) => (
            <Link
              key={entry.id}
              href={`/log/${entry.slug}`}
              className="group relative flex transform-gpu flex-col overflow-hidden rounded-md border border-transparent bg-transparent px-4 py-4 shadow-none transition-all duration-200 hover:border-highlightHigh hover:bg-highlightHigh hover:bg-opacity-25 hover:shadow-xl"
              style={{ backfaceVisibility: `hidden` }}
            >
              <h3 className="text-xl font-semibold underline decoration-2 underline-offset-2 group-hover:text-love">
                {entry.title}
              </h3>

              <div className="mt-2 flex flex-row items-center justify-start space-x-2">
                <p className="text-xs tracking-wide text-text/70">
                  {dayjs(entry.date).format(`MMM DD, YYYY`)}
                </p>

                {entry.featured ? (
                  <p className="rounded-md bg-love/75 p-[0.375rem]">
                    <FontAwesomeIcon
                      icon={faThumbTack}
                      className="text-[0.625rem] text-surface"
                      fixedWidth
                    />
                  </p>
                ) : null}
              </div>

              {entry.summary ? (
                <p className="mt-2 w-2/3 text-sm leading-normal tracking-wide">
                  {entry.summary}
                </p>
              ) : null}

              <img
                src={entry.hero.url}
                alt=""
                className="absolute right-0 top-0 h-full w-2/3 scale-100 object-cover opacity-0 brightness-200 saturate-200 transition-all duration-500 gradient-mask-l-0 group-hover:scale-[1.075] group-hover:opacity-30"
              />
            </Link>
          ))}
        </section>
      ) : null}
    </>
  )
}

export default LogIndexPage
