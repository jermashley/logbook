import { SelectTheme } from '@Components/Feature/SelectTheme'
import { useRouteIsCurrent } from '@Hooks/useRouteIsCurrent'
import { Link } from '@inertiajs/react'
import { cn } from '@Utils/cn'

const navigationLinks = [
  {
    name: `Log`,
    href: `/log`,
  },
  {
    name: `Foto`,
    href: `/foto`,
  },
  {
    name: `Work`,
    href: `/work`,
  },
  {
    name: `Resume`,
    href: `/resume`,
  },
]

export const Navigation = () => {
  const { currentRouteBeginsWith } = useRouteIsCurrent()

  return (
    <header
      className={cn(`sticky top-0 z-50 w-full bg-base/75 backdrop-blur-lg`)}
    >
      <nav
        className={cn(
          `mx-auto flex w-full max-w-2xl flex-row items-center justify-between px-0 py-4`,
        )}
      >
        <div>
          <Link
            href="/"
            className={cn(`text-sm font-medium text-text  hover:text-love`)}
          >
            Jeremiah Ashley
          </Link>
        </div>

        <div
          className={cn(`space-x-1" flex flex-row items-center justify-end`)}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                `group rounded-md border border-transparent px-4 py-2 text-sm hover:border-highlightHigh hover:bg-overlay`,
              )}
            >
              <span
                className={cn(
                  `text-text group-hover:text-love`,
                  currentRouteBeginsWith(link.href)
                    ? `font-bold text-love underline decoration-1 underline-offset-2`
                    : ``,
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}

          <SelectTheme />
        </div>
      </nav>
    </header>
  )
}
