import { Link } from '@inertiajs/react'
import { useDocumentTitle } from '@mantine/hooks'
import dayjs from 'dayjs'

const LogIndexPage = ({ entries }) => {
  useDocumentTitle(`Log | Jeremiah Ashley`)

  return (
    <section className="flex flex-col space-y-2">
      {entries?.map((entry) => (
        <Link
          key={entry.id}
          href={`/log/${entry.slug}`}
          className="group relative -mx-4 flex transform-gpu flex-col overflow-hidden rounded-md border border-transparent bg-transparent px-4 py-4 shadow-none transition-all duration-200 hover:border-highlightHigh hover:bg-highlightHigh hover:bg-opacity-25 hover:shadow-xl"
          style={{ backfaceVisibility: `hidden` }}
        >
          <h3 className="text-xl font-semibold underline decoration-2 underline-offset-2 group-hover:text-love">
            {entry.title}
          </h3>

          <p className="mt-1 text-xs tracking-wide text-text/70">
            {dayjs(entry.update_date).format(`MMM DD, YYYY`)}
          </p>

          {entry.summary ? (
            <p className="mt-2 text-sm leading-loose tracking-wide">
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
  )
}

export default LogIndexPage
