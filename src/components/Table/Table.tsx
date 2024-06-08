interface ITable {
  headers: string[]
  data: JSX.Element[] | number[]
}

export default function Table({ headers, data }: ITable) {
  const dataArray = Array.isArray(data) ? data : [data]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 table-fixed">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border-b border-r text-center w-auto"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {dataArray.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="py-2 px-4 border-b border-r text-center w-auto"
              >
                {cell}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
