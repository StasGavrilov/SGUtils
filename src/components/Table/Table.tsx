interface ITable {
  headers: string[]
  data: Record<string, number | string | JSX.Element>[]
}

export default function Table({ headers, data }: ITable) {
  const isEnglish = (headers: string[]) => {
    return headers.every(header => /^[A-Za-z\s]+$/.test(header))
  }

  const headersToDisplay = isEnglish(headers) ? headers : headers.slice().reverse()

  return (
    <div className='overflow-x-auto'>
      <div className='hidden md:block'>
        <table className='min-w-full bg-white border border-gray-300 table-auto border-collapse'>
          <colgroup>
            {headersToDisplay.map((_, index) => (
              <col key={index} style={{ width: `${100 / headersToDisplay.length}%` }} />
            ))}
          </colgroup>
          <thead className='bg-gray-100 border border-gray-300'>
            <tr>
              {headersToDisplay.map((header, index) => (
                <th key={index} className='py-2 px-4 border border-gray-300 text-center'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headersToDisplay.map((header, cellIndex) => (
                  <td key={cellIndex} className='py-2 px-4 border border-gray-300 text-center'>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='md:hidden'>
        <table className='min-w-full bg-white border border-gray-300 table-auto border-collapse'>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className='border border-gray-300'>
                {headersToDisplay.map((header, cellIndex) => (
                  <td key={cellIndex} className='py-2 px-4 border border-gray-300 flex'>
                    <span className='w-1/3 flex items-center font-bold px-2 py-1 lg:text-center border-r border-gray-300'>{header}</span>
                    <span className='w-2/3 px-2 py-1 lg:text-center'>{row[header]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
