import BOM from '../components/bom'
import Files from '../components/files'
import Link from 'next/link'

export default () => (
  <div className="flex flex-col pt-10">
    <p className="mt-4 max-w-3xl text-base  p-4 bg-yellow-200 rounded-lg">
      Do you have the facilities and resources to mass manufacture masks? Please
      get in touch with our team at{' '}
      <a href="mailto:OpenFacePPEproject@gmail.com">
        OpenFacePPEproject@gmail.com
      </a>
    </p>

    <h1 className="mt-6 text-2xl">How to get started making shields</h1>

    <p className="mt-6 max-w-3xl text-base leading-7">
      If you're fabricating face shields, please download the{' '}
      <Link href="#download">
        <a>latest files to get started.</a>
      </Link>{' '}
      The DXF should provide you with the outlines that can be used in almost
      any flat material fabrication process (laser cutters, rule dies, drag
      knife, CNC punch, etc.).
    </p>
    <p className="mt-6 max-w-3xl text-base leading-7">
      Refer to the <a href="#bom">BOM</a> (bill of materials) for the materials
      you'll need.
    </p>

    <p className="mt-6 max-w-3xl text-base leading-7">
      For manufacturing, our team can help source materials and provide guidance
      on best practices.{' '}
      <a href="mailto:OpenFacePPEproject@gmail.com">Please get in touch. </a>
    </p>

    <p className="mt-6 max-w-3xl text-base leading-7">
      If you're assembling the shields, please download the instructions below
      and <a href="#assemble">watch the video</a> to learn how to properly
      prepare the shields for delivery.
    </p>

    <h1 className="mt-6 text-2xl" id="download">
      Downloads
    </h1>
    <Files />

    <h1 className="mt-6 text-2xl" id="bom">
      Bill of Materials
    </h1>
    <BOM />
    <p>
      We’re making ours from 0.01” PET sheet, but almost any clear flexible
      material should work (such as polycarbonate, PETA, PETG, vinyl, etc).
    </p>

    <h1 className="mt-6 text-2xl" id="assemble">
      Assembly Video
    </h1>
    <iframe
      className="mt-6 w-full  "
      width="560"
      height="315"
      src="https://www.youtube.com/embed/haZ7mYbM1eA"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <h1 className="mt-6 mb-4 text-2xl w-full">Photos</h1>

    <div className="flex mt-4 justify-between">
      <span className="rounded-lg">
        <img className="h-auto w-full max-w-xs mx-auto" src="raw.png" />
      </span>
      <span className="w-4 h-4 "></span>
      <span className="rounded-lg">
        <img className="h-auto w-full max-w-xs mx-auto p4" src="visor.png" />
      </span>
    </div>
    <div className="flex mt-4 justify-between">
      <span className="rounded-lg">
        <img className="h-auto w-full max-w-xs mx-auto" src="band.png" />
      </span>
      <span className="w-4 h-4 "></span>
      <span className="rounded-lg">
        <img className="h-auto w-full max-w-xs mx-auto p4" src="foam.png" />
      </span>
    </div>
  </div>
)
