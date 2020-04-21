import Link from 'next/link'
import News from '../components/news'

export default () => (
  <div>
    <div className="flex flex-col pt-20">
      <div className="w-full my-6 rounded-lg">
        {' '}
        <img
          className="h-auto w-50 max-w-xs mx-auto p-6 pt-12"
          src="mask.svg"
        />
      </div>
      <div className="m-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="https://docs.google.com/forms/d/1WHdlt-MSwij-8qYiJy1LlIU_DuFOQi_OLSzO4t1P0IE/edit"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Official Request Form
          </a>
        </div>
      </div>
      <p className="mt-2 max-w-3xl text-lg">
        If you’re a hospital or healthcare facility in NYC Metro and you need
        shields, add your contact info to the form above. We’re coordinating
        distributed production efforts by both manufacturers and individual
        makers.
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-7">
        Contact{' '}
        <a className="text-indigo-600" href="mailto:shields@responseppe.com">
          shields@responseppe.com
        </a>{' '}
        for large order procurement.
      </p>

      <News />
    </div>
  </div>
)
