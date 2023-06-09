import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHeadphonesAlt, faTimes } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import {
  useMyProfile,
  useNowPlaying,
  useRecentlyPlayed,
} from '@Hooks/Queries/Spotify'
import { cn } from '@Utils/cn'
import { Fragment, useState } from 'react'

export const SpotifySidebar = () => {
  const [isOpen, setIsOpen] = useState(() => false)

  const nowPlaying = useNowPlaying()
  const recentlyPlayed = useRecentlyPlayed()
  const myProfile = useMyProfile()

  return (
    <>
      <button
        className={cn(
          `inline-flex w-full items-center justify-center space-x-2 overflow-hidden rounded-md border border-transparent p-2 text-base text-text  hover:border-highlightHigh hover:bg-overlay hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-opacity-75`,
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        <FontAwesomeIcon icon={faHeadphonesAlt} fixedWidth />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-200"
            leave="transition-all ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 h-screen w-full bg-base/50 backdrop-blur-lg" />
          </Transition.Child>

          <div
            className={cn(
              `fixed bottom-0 right-0 top-0 z-50 h-screen w-full max-w-sm p-6 lg:max-w-sm`,
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 origin-top"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 scale-100 translate-x-0"
              leave="ease-in duration-100 origin-left"
              leaveFrom="opacity-100 scale-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <Dialog.Panel
                className={cn(
                  `flex h-full w-full flex-col items-stretch justify-start rounded-md border border-highlightMed bg-base/80 px-6 py-4 shadow-xl backdrop-blur-md backdrop-brightness-125  backdrop-saturate-150`,
                )}
              >
                <Dialog.Title className="flex w-full flex-row items-center justify-between">
                  <span className="text-xl font-semibold text-text">
                    Música
                  </span>

                  <button
                    className={cn(
                      `inline-flex items-center justify-center space-x-2 overflow-hidden rounded-md border border-transparent p-2 text-base text-text  hover:border-highlightHigh hover:bg-overlay hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-opacity-75`,
                    )}
                    onClick={() => setIsOpen(() => false)}
                  >
                    <FontAwesomeIcon icon={faTimes} fixedWidth />
                  </button>
                </Dialog.Title>

                <section className="mt-12">
                  {nowPlaying.data?.item ? (
                    <>
                      <div className="mx-auto aspect-square w-full max-w-[12rem] overflow-hidden rounded-md shadow-xl md:max-h-full md:max-w-full">
                        <img
                          src={nowPlaying.data.item.album.images[0].url}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="mt-6">
                        <h3 className="text-xs font-semibold uppercase text-text/75">
                          Now Playing
                        </h3>

                        <a
                          href={nowPlaying.data?.item?.external_urls?.spotify}
                          target="_blank"
                          className="mt-1 block text-sm font-bold text-text hover:text-love"
                          rel="noreferrer"
                        >
                          {nowPlaying.data?.item?.name}
                        </a>

                        <p>
                          {nowPlaying.data?.item?.artists?.map(
                            (artist, index) => (
                              <Fragment key={artist.id}>
                                <a
                                  href={artist.external_urls.spotify}
                                  target="_blank"
                                  className="text-xs font-normal leading-none text-text hover:text-love"
                                  rel="noreferrer"
                                >
                                  {artist.name}
                                </a>

                                {index !==
                                nowPlaying?.data?.item?.artists?.length - 1 ? (
                                  <span className="text-xs font-normal text-text">
                                    {`, `}
                                  </span>
                                ) : null}
                              </Fragment>
                            ),
                          )}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-center font-medium text-base text-text/75">
                      It&apos;s quiet...too quiet.
                    </p>
                  )}
                </section>

                <section className="mt-12 flex flex-grow flex-col items-start justify-start space-y-4 overflow-y-auto">
                  <h3 className="text-xs font-semibold uppercase text-text/75">
                    Recently Played
                  </h3>

                  {recentlyPlayed.data?.items?.map((item) => (
                    <div
                      key={item.played_at}
                      className="grid grid-cols-12 grid-rows-2 gap-x-4 gap-y-0"
                    >
                      <div className="col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col items-center justify-center">
                        <div className="mx-auto aspect-square w-full overflow-hidden rounded-md">
                          <img
                            src={item.track.album.images[0].url}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      <a
                        href={item.track.external_urls.spotify}
                        target="_blank"
                        className="col-start-4 col-end-13 row-start-1 row-end-2 block self-end text-sm font-bold leading-none text-text hover:text-love"
                        rel="noreferrer"
                      >
                        {item.track.name}
                      </a>

                      <p className="col-start-4 col-end-13 row-start-2 row-end-3 self-start leading-none">
                        {item.track?.artists?.map((artist, index) => (
                          <Fragment key={artist.id}>
                            <a
                              href={artist.external_urls.spotify}
                              target="_blank"
                              className="text-[0.625rem] font-normal leading-none text-text hover:text-love"
                              rel="noreferrer"
                            >
                              {artist.name}
                            </a>

                            {index !== item.track?.artists?.length - 1 ? (
                              <span className="text-xs font-normal text-text">
                                {`, `}
                              </span>
                            ) : null}
                          </Fragment>
                        ))}
                      </p>
                    </div>
                  ))}
                </section>

                <section className="pt-5">
                  <a
                    href={myProfile.data?.external_urls?.spotify}
                    className="flex w-full cursor-pointer flex-row items-center justify-center space-x-2 rounded-md border border-transparent px-4 py-2 text-sm hover:border-highlightHigh hover:bg-surface disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75 md:flex md:flex-row md:items-center md:justify-center"
                    target="_blank"
                    rel="noreferrer"
                    disabled={!myProfile.data?.external_urls?.spotify}
                  >
                    <FontAwesomeIcon icon={faSpotify} fixedWidth />

                    <span>Profile</span>
                  </a>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
