export default function Banner() {
  return (
    <div className="w-full relative bg-green-600">
      <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            {/* <span className="hidden md:inline">COVID-19 ALERT:</span> */}
            <span className="">
              Shields available for mediate delivery. Please reach out to
            </span>
            <span className="block sm:m-2 sm:inline-block mt-2 md:m-0">
              <a
                href="mailto:shields@responseppe.com"
                className="sm:p-2 text-white font-bold underline"
              >
                shields@responseppe.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
