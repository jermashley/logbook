import { SelectTheme } from '@Components/Feature/SelectTheme'
import { faCircle } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    <nav className={cn(`top-0" sticky w-full`)}>
      <section
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
                `rounded-md border border-transparent bg-base px-4 py-2 text-sm  hover:border-highlightHigh hover:bg-overlay`,
              )}
            >
              <span
                className={cn(
                  `text-text`,
                  currentRouteBeginsWith(link.href)
                    ? `font-bold text-love underline`
                    : ``,
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}

          <SelectTheme />
        </div>
      </section>
    </nav>
  )
}
