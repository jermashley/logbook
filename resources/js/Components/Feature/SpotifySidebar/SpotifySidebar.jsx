import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import {
  faAlbumCollection,
  faHeadphonesAlt,
  faTimes,
} from '@fortawesome/pro-duotone-svg-icons'
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
            <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 h-screen w-full bg-base/50 backdrop-blur-2xl" />
          </Transition.Child>

          <div
            className={cn(
              `fixed bottom-0 right-0 top-0 z-50 h-screen w-full max-w-md p-6 lg:max-w-sm sm:landscape:max-w-full md:landscape:max-w-sm`,
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
                  `flex h-full w-full flex-col overflow-hidden rounded-md border border-highlightMed bg-base/80 px-6 py-4  shadow-xl backdrop-blur-md backdrop-brightness-125 backdrop-saturate-150`,
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

                <div className="mt-6 grid h-full w-full grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-4 gap-y-8 overflow-hidden sm:grid-rows-[auto_1fr_auto] sm:landscape:mt-4 sm:landscape:grid-rows-2 md:landscape:grid-rows-[auto_1fr_auto]">
                  <section className="col-start-1 col-end-13 grid grid-cols-12 grid-rows-2 gap-x-4 sm:landscape:col-start-1 sm:landscape:col-end-7 sm:landscape:row-start-1 sm:landscape:row-end-2 sm:landscape:gap-x-2 md:landscape:col-start-1 md:landscape:col-end-13">
                    {nowPlaying.data?.item ? (
                      <>
                        <a
                          href={
                            nowPlaying?.data?.item?.album?.external_urls
                              ?.spotify
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="group relative col-start-1 col-end-5 row-start-1 row-end-3 block h-full w-full self-center overflow-hidden rounded-md shadow-xl sm:landscape:col-start-1 sm:landscape:col-end-6 sm:landscape:row-start-1 sm:landscape:row-end-3"
                        >
                          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden rounded-md bg-highlightLow/75 opacity-0 backdrop-blur-md backdrop-brightness-125 backdrop-saturate-150 transition-opacity duration-500 group-hover:opacity-100">
                            <FontAwesomeIcon
                              icon={faAlbumCollection}
                              className="text-center text-2xl text-text md:text-4xl"
                              fixedWidth
                            />
                            <span className="mt-4 text-xs font-semibold text-text md:text-sm">
                              View Album
                            </span>
                          </div>

                          <img
                            src={nowPlaying.data.item.album.images[0].url}
                            alt=""
                            className="h-full w-auto object-cover"
                          />
                        </a>

                        <div className="col-start-5 col-end-13 row-start-1 row-end-3 flex flex-col items-start justify-center self-center sm:landscape:col-start-6 sm:landscape:col-end-13 sm:landscape:row-start-1 sm:landscape:row-end-3">
                          <h3 className="text-xs font-semibold uppercase text-text/75">
                            Now Playing
                          </h3>

                          <a
                            href={nowPlaying.data?.item?.external_urls?.spotify}
                            target="_blank"
                            className="mt-1 block text-[0.6875rem] font-bold text-text hover:text-love md:text-sm sm:landscape:text-xs"
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
                                  nowPlaying?.data?.item?.artists?.length -
                                    1 ? (
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
                      <div className="col-start-1 col-end-13 row-start-1 row-end-3 block h-full w-full self-center overflow-hidden sm:landscape:col-start-1 sm:landscape:col-end-13 sm:landscape:row-start-1 sm:landscape:row-end-3">
                        <p className="text-center font-medium text-base text-text/75">
                          It&apos;s quiet...too quiet.
                        </p>
                      </div>
                    )}
                  </section>

                  <section className="relative col-start-1 col-end-13 flex flex-col items-start justify-start space-y-4 overflow-y-auto sm:landscape:col-start-7 sm:landscape:col-end-13 sm:landscape:row-start-1 sm:landscape:row-end-3 md:landscape:col-start-1 md:landscape:col-end-13 md:landscape:row-start-2 md:landscape:row-end-3">
                    <h3 className="text-xs font-semibold uppercase text-text/75">
                      Recently Played
                    </h3>

                    {recentlyPlayed.data?.items?.map((item) => (
                      <div
                        key={item.played_at}
                        className="grid grid-cols-12 grid-rows-2 gap-x-4 gap-y-0"
                      >
                        <div className="col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col items-center justify-center">
                          <a
                            className="group relative mx-auto block aspect-square w-full overflow-hidden rounded-md"
                            href={item.track.album.external_urls.spotify}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center overflow-hidden rounded-md bg-highlightLow/75 opacity-0 backdrop-blur-md backdrop-brightness-125 backdrop-saturate-150 transition-opacity duration-500 group-hover:opacity-100">
                              <FontAwesomeIcon
                                icon={faAlbumCollection}
                                className="text-center text-xl text-text"
                                fixedWidth
                              />
                            </div>

                            <img
                              src={item.track.album.images[0].url}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </a>
                        </div>

                        <a
                          href={item.track.external_urls.spotify}
                          target="_blank"
                          className="col-start-4 col-end-13 row-start-1 row-end-2 block self-end font-bold text-text hover:text-love md:text-sm sm:landscape:text-xs"
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

                  <section className="col-start-1 col-end-13 flex flex-col items-stretch justify-end sm:landscape:col-start-1 sm:landscape:col-end-7 sm:landscape:row-start-2 sm:landscape:row-end-3 md:landscape:col-start-1 md:landscape:col-end-13 md:landscape:row-start-3 md:landscape:row-end-4">
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
