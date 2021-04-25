import React, { useState, useRef } from 'react';
import Link from './Link';
import { useOnClickOutside } from '../utils/hooks';

const links = [
  { name: 'Subscribe', link: 'https://buttondown.email/bdougie' },
  // { name: 'Twitch', link: 'https://twitch.tv/bdougieYO' },
  { name: 'Twitter', link: 'https://twitter.com/bdougieyo' },
  { name: 'YouTube', link: 'https://www.youtube.com/ilikerobot?sub_confirmation=1' },
  { name: 'Discord', link: 'https://discord.com/invite/U2peSNf23P' },
  { name: 'GitHub', link: 'https://github.com/bdougie/live' },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef();
  useOnClickOutside(mobileMenuRef, () => setIsOpen(false));

  return (
    <nav className="flex items-center justify-between max-w-xl p-4 mx-auto text-white sm:px-6 lg:max-w-screen-xl lg:px-8">
      <Link href="/" className="text-xl font-bold">
        bdougie.live
      </Link>
      <div className="flex hidden space-x-10 text-sm md:block">
        {links.map((l) => (
          <Link key={l.link} href={l.link}>
            {l.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute inset-x-0 top-0 p-2 mt-10 transition origin-top-right transform md:hidden"
          ref={mobileMenuRef}
        >
          <div className="rounded-lg shadow-md">
            <div
              className="overflow-hidden bg-white rounded-lg shadow-xs"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Link href="/" className="text-xl font-bold text-black">
                    bdougie.live
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {links.map((l) => (
                  <Link
                    key={l.link}
                    href={l.link}
                    className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
