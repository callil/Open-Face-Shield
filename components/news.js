export default function News() {
  return (
    <>
      <h1 className="mt-12 text-2xl">Latest News</h1>
      <p className="mt-4 max-w-3xl text-base  p-4 bg-yellow-200 rounded-lg">
        As of 3/24, Sinai BioDesign (Mount Sinai Hospital System, NYC) has been
        testing and validating basic clinical functionality of these devices
        with success.
      </p>
      <p className="mt-4 max-w-3xl text-base  p-4 bg-yellow-200 rounded-lg">
        Members of our core team are also tooling up to produce these for NYC
        Hospitals.{' '}
        <span className=" font-semibold">
          We anticipate being able to supply 100k shields per week starting 3/30
          with the ability to ramp up for more capacity if necessary.{' '}
        </span>
      </p>
    </>
  )
}
