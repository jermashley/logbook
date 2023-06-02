import {
  faCircleHalfStroke,
  faMoonCloud,
  faSunCloud,
} from '@fortawesome/pro-duotone-svg-icons'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, Transition } from '@headlessui/react'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { cn } from '@Utils/cn'
import { Fragment, useEffect } from 'react'

const themes = [
  {
    name: `Rosé Pine`,
    value: `theme-rosePine`,
  },
  {
    name: `Rosé Pine Moon`,
    value: `theme-rosePineMoon`,
  },
  {
    name: `Rosé Pine Dawn`,
    value: `theme-rosePineDawn`,
  },
]

const DynamicThemeIcon = ({ theme }) => {
  return (
    <>
      {theme === `theme-rosePine` ? (
        <FontAwesomeIcon icon={faCircleHalfStroke} fixedWidth />
      ) : null}

      {theme === `theme-rosePineMoon` ? (
        <FontAwesomeIcon icon={faMoonCloud} fixedWidth />
      ) : null}

      {theme === `theme-rosePineDawn` ? (
        <FontAwesomeIcon icon={faSunCloud} fixedWidth />
      ) : null}
    </>
  )
}

export const SelectTheme = () => {
  const colorScheme = useColorScheme()
  const [selectedTheme, setSelectedTheme] = useLocalStorage({
    key: `color-scheme`,
    defaultValue:
      colorScheme === `dark` ? `theme-rosePine` : `theme-rosePineDawn`,
  })

  useEffect(() => {
    document.documentElement.setAttribute(`class`, selectedTheme)
  }, [selectedTheme])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center space-x-2 overflow-hidden rounded-md border border-transparent p-2 text-base text-text  hover:border-highlightHigh hover:bg-overlay hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-opacity-75">
          <DynamicThemeIcon theme={selectedTheme} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md border border-highlightMed bg-surface shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-love focus-visible:ring-opacity-75">
          <div className="px-1 py-1 ">
            {themes.map((theme) => (
              <Menu.Item key={theme.value}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? `bg-love text-white` : `text-text`
                    } group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm`}
                    onClick={() => setSelectedTheme(theme.value)}
                  >
                    <div className="flex flex-row items-center justify-start space-x-2">
                      <DynamicThemeIcon theme={theme.value} />

                      <span>{theme.name}</span>
                    </div>

                    {selectedTheme === theme.value ? (
                      <FontAwesomeIcon
                        icon={faCircle}
                        className={cn(
                          `text-[0.5rem] ${
                            active ? `text-white` : `text-love`
                          }`,
                        )}
                        fixedWidth
                      />
                    ) : (
                      <></>
                    )}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
