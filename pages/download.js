import Nav from '../components/nav'
import License from '../components/license'
import Files from '../components/files'

export default () => (
  <div className="flex flex-col w-full">
    {/* <img className="h-auto w-full max-w-xs mx-auto p-6" src="mask.svg" /> */}
    <div className="mt-8 flex flex-col flex-wrap justify-center items-center">
      <p className="mt-4 max-w-3xl text-base  p-4 bg-yellow-200 rounded-lg">
        Do you have the facilities and resources to mass manufacture masks?
        Please get in touch with our team at{' '}
        <a href="mailto:OpenFacePPEproject@gmail.com">
          OpenFacePPEproject@gmail.com
        </a>
      </p>

      <h1 className="mt-6 text-2xl w-full">Downloads</h1>

      <Files />
    </div>
  </div>
)
