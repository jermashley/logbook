import { Link } from '@inertiajs/react'
import dayjs from 'dayjs'

const LogIndexPage = ({ entries }) => {
  return (
    <section className="flex flex-col space-y-2">
      {entries?.map((log) => (
        <Link
          key={log.id}
          href={`/log/${log.slug}`}
          className="group -mx-4 flex flex-col rounded-md border border-transparent bg-transparent px-4 py-2 hover:border-highlightHigh hover:bg-highlightLow"
        >
          <h3 className="text-xl font-semibold group-hover:text-love">
            {log.title}
          </h3>

          <p className="text-xs text-text/70">
            {dayjs(log.update_date).format(`MMM DD, YYYY`)}
          </p>

          {log.summary ? (
            <p className="mt-2 text-sm leading-loose">{log.summary}</p>
          ) : null}
        </Link>
      ))}
    </section>
  )
}

export default LogIndexPage
