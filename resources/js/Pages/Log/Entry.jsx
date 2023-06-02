export const LogEntryPage = ({ entry }) => {
  return (
    <article className="prose md:prose-lg lg:prose-xl">
      <img src={entry.hero.url} alt="" />

      <h1 className="text-text">{entry.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: entry.content }} />
    </article>
  )
}

export default LogEntryPage
