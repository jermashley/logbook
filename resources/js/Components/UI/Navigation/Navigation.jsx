import { SelectTheme } from '@Components/Feature/SelectTheme'
import { Link } from '@inertiajs/react'
import { cn } from '@Utils/cn'

export const Navigation = () => {
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
          <Link
            href="/"
            className={cn(
              `overflow-hidden rounded-md border border-transparent bg-base px-4 py-2 text-sm  hover:border-highlightHigh hover:bg-overlay`,
            )}
          >
            Log
          </Link>

          <Link
            href="/"
            className={cn(
              `overflow-hidden rounded-md border border-transparent bg-base px-4 py-2 text-sm  hover:border-highlightHigh hover:bg-overlay`,
            )}
          >
            Foto
          </Link>

          <Link
            href="/"
            className={cn(
              `overflow-hidden rounded-md border border-transparent bg-base px-4 py-2 text-sm  hover:border-highlightHigh hover:bg-overlay`,
            )}
          >
            Work
          </Link>

          <Link
            href="/"
            className={cn(
              `overflow-hidden rounded-md border border-transparent bg-base px-4 py-2 text-sm  hover:border-highlightHigh hover:bg-overlay`,
            )}
          >
            Resume
          </Link>

          <SelectTheme />
        </div>
      </section>
    </nav>
  )
}
