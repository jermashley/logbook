import { SelectTheme } from '@Components/Feature/SelectTheme'
import { SpotifySidebar } from '@Components/Feature/SpotifySidebar'
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
        `sticky top-0 z-10 w-full bg-base/75 px-4 backdrop-blur-md backdrop-brightness-125  backdrop-saturate-150 md:px-0`,
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

        <div className="ml-auto flex flex-row items-stretch justify-start space-x-1">
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

          <SpotifySidebar />

          <button
            className={cn(
              `inline-flex w-full items-center justify-center space-x-2 overflow-hidden rounded-md border border-transparent p-2 text-base text-text hover:border-highlightHigh  hover:bg-overlay hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-opacity-75 md:hidden`,
            )}
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="nav" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-200"
            leave="transition-all ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 top-[4.125rem] bg-base bg-opacity-50" />
          </Transition.Child>

          <div className={cn(`fixed left-0 right-0 top-[4.125rem] z-50`)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 origin-top"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-100 origin-top"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  )
}
