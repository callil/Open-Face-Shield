import Link from 'next/link'

export default function Button(props) {
  return (
    <Link href={props.link}>
      <a
        className="p-4 bg-indigo-800 items-center text-white leading-none lg:rounded-full flex lg:inline-flex mt-4 mr-2 px-4 hover:bg-indigo-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out shadow"
        role="alert"
      >
        {/* <span className="flex rounded-full bg-indigo-500  text-white uppercase px-2 py-1 text-xs font-bold mr-3">
              Download
            </span> */}
        <span className="text-lg font-semibold mr-2 text-left flex-auto">
          {props.text}
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </a>
    </Link>
  )
}

export function LightButton(props) {
  return (
    <Link href={props.link}>
      <a
        className="p-4 bg-indigo-100 items-center test-indigo-800  leading-none lg:rounded-full flex lg:inline-flex mt-4 mr-2 px-4 hover:bg-indigo-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out shadow"
        role="alert"
      >
        {/* <span className="flex rounded-full bg-indigo-500  text-white uppercase px-2 py-1 text-xs font-bold mr-3">
              Download
            </span> */}
        <span className="text-lg font-semibold mr-2 text-left flex-auto">
          {props.text}
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </a>
    </Link>
  )
}
