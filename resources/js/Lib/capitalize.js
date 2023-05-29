export const capitalize = (str) => {
  if (!str || typeof str !== `string`) {
    return ``
  }

  const firstChar = str.charAt(0).toUpperCase()
  const restOfString = str.slice(1).toLowerCase()

  return firstChar + restOfString
}
