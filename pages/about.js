import Nav from '../components/nav'
import ButtonLight from '../components/button-light'

export default () => (
  <div className="flex flex-col pt-12">
    <p className=" max-w-3xl text-base leading-7">
      The Open Source Face Shield was designed by{' '}
      <a className="" href="https://www.linkedin.com/in/uriel-eisen-9724b390/">
        Uriel Eisen
      </a>
      ,{' '}
      <a href="https://www.linkedin.com/in/andrew-eisen-193a536/">
        Andrew Eisen
      </a>
      , <a href="https://www.linkedin.com/in/vadimgordin/">Vadim Gordin</a>, and{' '}
      <a href="https:///callil.com/">Callil Capuozzo</a> as part of the Open
      Face PPE Project in collaboration with the NYU COVID-19 Task Force and
      many others.
    </p>
    <p className="mt-1">
      Instruction and Face Shield illustrations by{' '}
      <a href="http://www.rachelciavarella.com/">Rachel Ciavarella</a>
    </p>
    <p className="mt-1">
      Special thanks to Joseph Zoleta and the
      <a href="https://black6project.org/"> Black 6 project team</a> for
      distributing shields and producing the assembly video.
    </p>

    <h1 className="mt-6 text-base font-semibold">
      About the Open Face PPE Project
    </h1>

    <p className="mt-6 max-w-3xl text-base leading-7">
      We’re a group of volunteer engineers and designers in NYC and abroad. We
      operate twelve 3D printers and a full machine shop that we’re using to
      design and ship COVID-19 supplies.
    </p>
    <p className="mt-2 max-w-3xl text-base leading-7">
      Our team has also designed a 3D-printed respirator. The reference document
      can be found here:
      <a
        className="text-indigo-600 ml-2"
        href="https://docs.google.com/document/d/1B4atDWZVRR38-2HqY_o_6FL_KPhyRS1oG_nO-1ZoGF0/edit?usp=sharing"
      >
        Open Source Respirator.
      </a>
    </p>

    <h1 className=" mt-6 text-base font-semibold">
      About the NYU COVID-19 Task Force
    </h1>
    <p className="mt-6 max-w-3xl text-base leading-7">
      The NYU COVID-19 Task Force focuses on developing rapid-response solutions
      to critical issues facing our healthcare system, including designing,
      manufacturing, and distributing personal protective equipment (PPE) and
      medical support equipment devices to New York City hospitals as our city
      battles the novel coronavirus pandemic. This task force draws from across
      the university and beyond to mobilize expertise and resources in
      engineering, medicine, public health, entrepreneurship, and computer
      science. <br /> <br />{' '}
    </p>

    <h1 className=" mt-6 text-3xl">Contact</h1>
    <p className="mt-6">
      For information about the OpenPPE Open Face Shield design and
      manufacturing please contact:
    </p>
    <a className="mt-2" href="mailto:covid19.taskforce@nyu.edu">
      covid19.taskforce@nyu.edu
    </a>

    <p className="mt-6">
      For information about the NYU COVID-19 Task Force pelase contact:
    </p>
    <a className="mt-2" href="mailto:OpenFacePPEproject@gmail.com">
      OpenFacePPEproject@gmail.com
    </a>
  </div>
)
