import { Link } from '@inertiajs/react'

export const Navigation = () => {
  return (
    <nav className="w-full">
      <section className="mx-auto flex w-full max-w-2xl flex-row items-center justify-between px-0 py-4">
        <div>
          <a
            href="/"
            className="text-sm font-medium text-rosePineDawn-text transition-all duration-200 hover:text-rosePineDawn-love dark:text-rosePine-text dark:hover:text-rosePine-love"
          >
            Jeremiah Ashley
          </a>
        </div>

        <div className="flex flex-row items-center justify-end space-x-2">
          <Link
            href="/"
            className="overflow-hidden rounded-lg border border-transparent bg-rosePineDawn-base px-4 py-2 text-sm transition-all duration-200 hover:border-rosePineDawn-overlay hover:bg-rosePineDawn-surface dark:bg-rosePine-base dark:hover:border-rosePine-overlay dark:hover:bg-rosePine-surface"
          >
            Log
          </Link>
          <Link
            href="/"
            className="overflow-hidden rounded-lg border border-transparent bg-rosePineDawn-base px-4 py-2 text-sm transition-all duration-200 hover:border-rosePineDawn-overlay hover:bg-rosePineDawn-surface dark:bg-rosePine-base dark:hover:border-rosePine-overlay dark:hover:bg-rosePine-surface"
          >
            Foto
          </Link>
          <Link
            href="/"
            className="overflow-hidden rounded-lg border border-transparent bg-rosePineDawn-base px-4 py-2 text-sm transition-all duration-200 hover:border-rosePineDawn-overlay hover:bg-rosePineDawn-surface dark:bg-rosePine-base dark:hover:border-rosePine-overlay dark:hover:bg-rosePine-surface"
          >
            Work
          </Link>
          <Link
            href="/"
            className="overflow-hidden rounded-lg border border-transparent bg-rosePineDawn-base px-4 py-2 text-sm transition-all duration-200 hover:border-rosePineDawn-overlay hover:bg-rosePineDawn-surface dark:bg-rosePine-base dark:hover:border-rosePine-overlay dark:hover:bg-rosePine-surface"
          >
            Resume
          </Link>
        </div>
      </section>
    </nav>
  )
}
