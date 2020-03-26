import Link from 'next/link'
import Banner from './banner'

const links = [
  // { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/request', label: 'Request' },
  { href: '/instructions', label: 'Make' }
]

export default function Nav() {
  return (
    <div className="w-full">
      <nav>
        <ul className="flex justify-between items-center p-4 md:p-8 text-xl md:text-base flex-wrap">
          <li className="flex">
            <Link href="/">
              <a className="no-underline flex w-full text-gray-900 hover:text-gray-700">
                <span className="flex hidden md:block">
                  {/* <img src="NYU_torch.svg" className="mr-2 w-6" /> */}
                  OpenFacePPE
                </span>
                <span className="w-2 h-2 "></span>
                <span className=" hidden md:block text-gray-600">/ </span>
                <span className="w-2 h-2 "></span>
                <span className="text-gray-600"> Face Shield V1</span>
              </a>
            </Link>
          </li>
          <ul className="flex justify-center items-center text-2xl md:w-auto flex-wrap">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className="mr-4 md:ml-4">
                <a
                  href={href}
                  className="btn no-underline text-lg md:text-base text-gray-900 hover:text-gray-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
      <Banner />
    </div>
  )
}
