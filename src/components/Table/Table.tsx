interface ITable {
    headers: string[]
    data: JSX.Element[][]
  }

export default function Table({ headers, data }: ITable) {
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="py-2 px-4 border-b border-r text-center">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="py-2 px-4 border-b border-r text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
}
