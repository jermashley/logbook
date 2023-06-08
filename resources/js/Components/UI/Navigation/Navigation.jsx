import { SelectTheme } from '@Components/Feature/SelectTheme'
import { faBars } from '@fortawesome/pro-duotone-svg-icons'
import { faTimes } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import { useRouteIsCurrent } from '@Hooks/useRouteIsCurrent'
import { Link } from '@inertiajs/react'
import { cn } from '@Utils/cn'
import { Fragment, useState } from 'react'

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
    name: `Projects`,
    href: `/projects`,
  },
  {
    name: `Resume`,
    href: `/resume`,
  },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(() => false)
  const { currentRouteBeginsWith } = useRouteIsCurrent()

  return (
    <header
      className={cn(
        `sticky top-0 z-50 w-full bg-base/75 px-4 backdrop-blur-lg md:px-0`,
      )}
    >
      <div
        className={cn(
          `mx-auto flex w-full max-w-2xl flex-row items-center justify-start px-0 py-4`,
        )}
      >
        <Link
          href="/"
          className={cn(`text-sm font-medium text-text  hover:text-love`)}
        >
          Jeremiah Ashley
        </Link>

        <div className="ml-auto flex flex-row items-center justify-start space-x-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                `group hidden rounded-md border border-transparent px-4 py-2 text-sm hover:border-highlightHigh hover:bg-surface md:flex md:flex-row md:items-center md:justify-center`,
              )}
            >
              <span
                className={cn(
                  `font-semibold text-text group-hover:text-love`,
                  currentRouteBeginsWith(link.href)
                    ? `font-bold text-love underline decoration-2 underline-offset-2`
                    : ``,
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}

          <SelectTheme />

          <button
            className="inline-flex items-center justify-center space-x-2 overflow-hidden rounded-md border border-transparent p-2 text-base text-text hover:border-highlightHigh  hover:bg-overlay hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-opacity-75 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-text"
              fixedWidth
            />
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-200 opacity-200"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-200 opacity-200"
        leaveTo="transform scale-95 opacity-0"
        appear
      >
        <Dialog
          as="nav"
          open={isOpen}
          onClose={setIsOpen}
          className={cn(`fixed left-0 right-0 top-[4.125rem] z-50`)}
        >
          <Dialog.Panel
            className={cn(
              `flex flex-col items-stretch justify-start space-y-1 border-y border-y-highlightMed/60 bg-base/80 p-4 backdrop-blur-md backdrop-brightness-125  backdrop-saturate-150 md:hidden`,
            )}
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  `hover:shadow-lg/75 group rounded-md border border-transparent px-4 py-2 text-sm shadow-none hover:border-highlightHigh hover:bg-surface md:flex md:flex-row md:items-center md:justify-center`,
                  currentRouteBeginsWith(link.href)
                    ? `border-highlightHigh bg-surface`
                    : ``,
                )}
                onClick={() => setIsOpen(() => false)}
              >
                <span
                  className={cn(
                    `font-semibold text-base text-text group-hover:text-love`,
                    currentRouteBeginsWith(link.href)
                      ? `font-bold text-love underline decoration-2 underline-offset-2`
                      : ``,
                  )}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  )
}
