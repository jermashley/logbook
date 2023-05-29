export const useRouteIsCurrent = () => {
  const currentRouteBeginsWith = (path) => {
    return window.location.pathname.startsWith(path)
  }

  const currentRouteIs = (path) => {
    return window.location.pathname === path
  }

  return {
    currentRouteBeginsWith,
    currentRouteIs,
  }
}
