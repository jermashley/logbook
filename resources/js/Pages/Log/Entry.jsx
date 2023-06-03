import { useDocumentTitle } from '@mantine/hooks'
import dayjs from 'dayjs'

export const LogEntryPage = ({ entry }) => {
  useDocumentTitle(`${entry.title} | Jeremiah Ashley`)

  return (
    <article className="prose md:prose-lg lg:prose-xl">
      <img src={entry.hero.url} alt="" />

      <h1 className="text-text">{entry.title}</h1>

      <p className="mt-2 text-xs tracking-wide text-text/70">
        {dayjs(entry.date).format(`MMM DD, YYYY`)}
      </p>

      <div dangerouslySetInnerHTML={{ __html: entry.content }} />
    </article>
  )
}

export default LogEntryPage
