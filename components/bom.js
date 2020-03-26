export default function BOM() {
  return (
    <div className="flex flex-col py-6">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full overflow-hidden ">
          <table className="min-w-full ">
            <thead>
              <tr className="align-top">
                <th className="border px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Component
                </th>
                <th className="border px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Description
                </th>
                <th className="border px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Size
                </th>
                <th className="border px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Notes
                </th>
                <th className="border px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Supplier
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white align-top">
                <td className=" border max-w-xs px-3 py-4 text-sm leading-5 font-medium text-gray-900">
                  Clear Plastic Face Shield
                </td>
                <td className=" border max-w-xs px-3 py-4  text-sm leading-5 text-gray-800">
                  0.007" to .01" thick non-brittle clear material. PET or
                  polycarbonate is good.
                </td>
                <td className=" border px-3 py-4  text-sm leading-5 text-gray-800">
                  12.5" x 10.25"
                </td>
                <td className="border px-3 py-4 text-sm leading-5 text-gray-800">
                  Qty 2 can be cut from 12x24, as the part is tapered
                </td>
                <td className="border px-3 py-4  text-sm leading-5 text-gray-800">
                  <a
                    href="https://www.mcmaster.com/8567k62"
                    className="text-indigo-600 break-all  hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    McMaster Carr (link)
                  </a>
                </td>
              </tr>
              <tr className="bg-white align-top">
                <td className=" border max-w-xs px-3 py-4 text-sm leading-5 font-medium text-gray-900">
                  Forehead Strap
                </td>
                <td className=" border max-w-xs px-3 py-4  text-sm leading-5 text-gray-800">
                  Same material as the Face Shield
                </td>
                <td className=" border px-3 py-4  text-sm leading-5 text-gray-800">
                  1" x 10.75"
                </td>
                <td className="border px-3 py-4 text-sm leading-5 text-gray-800">
                  Cut alongside forehead strap
                </td>
                <td className="border px-3 py-4  text-sm leading-5 text-gray-800">
                  <a
                    href="https://www.mcmaster.com/8567k62"
                    className="text-indigo-600 break-all  hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    McMaster Carr (link)
                  </a>
                </td>
              </tr>
              <tr className="bg-white align-top">
                <td className=" border max-w-xs px-3 py-4 text-sm leading-5 font-medium text-gray-900">
                  Elastic
                </td>
                <td className=" border max-w-xs px-3 py-4  text-sm leading-5 text-gray-800">
                  3/8" or 1/2" wide elastic band
                </td>
                <td className=" border px-3 py-4  text-sm leading-5 text-gray-800">
                  16"
                </td>
                <td className="border px-3 py-4 text-sm leading-5 text-gray-800">
                  (searching for pre-cut supply)
                </td>
                <td className="border px-3 py-4  text-sm leading-5 text-gray-800">
                  <a
                    href="https://www.joann.com/pellon-1%2F2in--x-144yd-spool--knit-elastic-white/15035058.html"
                    className="text-indigo-600 break-all  hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    JO-ANN STORES, LLC
                  </a>
                </td>
              </tr>

              <tr>
                <td
                  colspan="5"
                  className=" p-2 pt-4 w-full uppercase text-xs text-gray-900"
                >
                  Optional
                </td>
              </tr>

              <tr className="bg-white align-top">
                <td className=" border max-w-xs px-3 py-4 text-sm leading-5 font-medium text-gray-900">
                  Foam {'    '}
                </td>
                <td className=" border max-w-xs px-3 py-4  text-sm leading-5 text-gray-800">
                  1"x1/2" strip
                </td>
                <td className=" border px-3 py-4  text-sm leading-5 text-gray-800">
                  10"
                </td>
                <td className="border px-3 py-4 text-sm leading-5 text-gray-800">
                  Cut to length.
                </td>
                <td className="border px-3 py-4  text-sm leading-5 text-gray-800">
                  <a
                    href="https://www.mcmaster.com/93275k56"
                    className="text-indigo-600 break-all  hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    McMaster Carr
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="5" className="p-2 text-xs text-red-500">
                  Warning - adding foam makes the shield much more difficult to
                  clean.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
