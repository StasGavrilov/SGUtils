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
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 table-fixed">
        <colgroup>
          {headersToDisplay.map((_, index) => (
            <col key={index} style={{ width: `${100 / headersToDisplay.length}%` }} />
          ))}
        </colgroup>

        <thead className="bg-gray-100">
          <tr>
            {headersToDisplay.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border-b border-r text-center"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headersToDisplay.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-2 px-4 border-b border-r text-center"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
