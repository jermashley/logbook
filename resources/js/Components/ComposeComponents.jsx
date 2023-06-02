export const ComposeComponents = ({ components, children }) => {
  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>
      }, children)}
    </>
  )
}
