import { Link } from '@inertiajs/react'
import dayjs from 'dayjs'

const LogIndexPage = ({ entries }) => {
  return (
    <section className="flex flex-col space-y-2">
      {entries?.map((entry) => (
        <Link
          key={entry.id}
          href={`/log/${entry.slug}`}
          className="group relative -mx-4 flex flex-col overflow-hidden rounded-md border border-transparent bg-transparent px-4 py-4 hover:border-highlightHigh hover:bg-highlightHigh hover:bg-opacity-25"
        >
          <h3 className="text-xl font-semibold group-hover:text-love">
            {entry.title}
          </h3>

          <p className="text-xs text-text/70">
            {dayjs(entry.update_date).format(`MMM DD, YYYY`)}
          </p>

          {entry.summary ? (
            <p className="mt-2 text-sm leading-loose">{entry.summary}</p>
          ) : null}

          <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform opacity-0 group-hover:opacity-30">
            <img
              src={entry.hero.url}
              alt=""
              className="h-full w-full object-cover saturate-150 gradient-mask-l-0"
            />
          </div>
        </Link>
      ))}
    </section>
  )
}

export default LogIndexPage
