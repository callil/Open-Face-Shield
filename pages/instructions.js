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

    <h1 className="mt-6 text-2xl">Design Overview</h1>
    <iframe
      width="560"
      height="315"
      src="https://drive.google.com/file/d/1LFEJVGUpZe_2h0QLpM1z9_-vevJmP9nS/view"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      className="mt-6 w-full h-auto"
    ></iframe>

    <h1 className="mt-6 text-2xl" id="assemble">
      Assembly Video
    </h1>
    <iframe
      className="mt-6 w-full  "
      width="560"
      height="315"
      src="https://www.youtube.com/embed/TCqxyl7dJ1U"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
)
