import Link from 'next/link'

import News from '../components/news'
import BOM from '../components/bom'

export default () => (
  <div className="max-w-2xl">
    <div>
      <h1 className="text-4xl font-bold flex items-center flex-wrap  mt-8">
        Open Source Face Shield
        <span className="inline-flex items-center px-3 py-4 rounded-full text-xl font-light leading-5 bg-gray-200 text-gray-900 md:ml-2 mt-2 md:mt-0 h-6">
          V1.1
        </span>
      </h1>
      <div className="bg-yellow-100 w-full my-6 rounded-lg">
        {' '}
        <img
          className="h-auto w-full max-w-xs mx-auto p-6 pt-12"
          src="mask.svg"
        />
      </div>
    </div>
    <div>
      <p className="mt-2 max-w-3xl text-lg leading-7 ">
        The Open Source Face Shield is a low cost, medical face shield designed
        to be quickly made using almost any flat material fabrication equipment
        (laser cutters, rule dies, drag knife, CNC punch, etc.), or even
        scissors and an office hole punch from any clear flexible material.
      </p>
      <p className="mt-2 max-w-3xl text-lg leading-7">
        It requires no hardware or 3D printed parts, just two pieces of flexible
        clear plastic and an elastic band.
      </p>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="mt-8 flex flex-wrap justify-between">
            <div className="inline-flex w-full flex-auto  md:w-auto rounded-md shadow">
              <Link href="/request">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full">
                  I need these for my medical facility.
                </a>
              </Link>
            </div>
            <span className="w-4 h-4 md:h-0 md:w-0"></span>
            <div className="md:ml-3 inline-flex flex-auto w-full md:w-auto ">
              <Link href="/instructions">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out w-full">
                  I want to make these.
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <News />
      <div className="mt-8 flex flex-col">
        <h1 className="mt-6 mb-4 text-2xl w-full">Photos</h1>
        <div className="flex justify-between">
          <span className="rounded-lg">
            <img className="h-auto w-full max-w-xs mx-auto" src="bd.png" />
          </span>
          <span className="w-4 h-4 "></span>

          <span className="rounded-lg">
            <img className="h-auto w-full max-w-xs mx-auto p4" src="use.png" />
          </span>
        </div>
        <div className="flex mt-4 justify-between">
          <span className="rounded-lg">
            <img className="h-auto w-full max-w-xs mx-auto" src="raw.png" />
          </span>
          <span className="w-4 h-4 "></span>

          <span className="rounded-lg">
            <img
              className="h-auto w-full max-w-xs mx-auto p4"
              src="visor.png"
            />
          </span>
        </div>
      </div>

      <h1 className="mt-6 text-2xl">Materials</h1>

      <BOM />
      <p className="mt-2 max-w-3xl text-base leading-7 ">
        We’re making ours from 0.01” PET sheet, but almost any clear flexible
        material should work (such as polycarbonate, PETA, PETG, vinyl, etc).
      </p>
    </div>
  </div>
)
