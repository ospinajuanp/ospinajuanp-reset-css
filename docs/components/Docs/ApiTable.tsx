'use client'

interface ApiTableProps {
  data: {
    name: string
    type: string
    description: string
    optional?: boolean
    defaultValue?: string
  }[]
}

export function ApiTable({ data }: ApiTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3 pr-4 font-semibold">Name</th>
            <th className="py-3 pr-4 font-semibold">Type</th>
            <th className="py-3 pr-4 font-semibold">Default</th>
            <th className="py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 pr-4 font-mono text-primary">{item.name}</td>
              <td className="py-3 pr-4 font-mono text-sm text-muted-foreground">{item.type}</td>
              <td className="py-3 pr-4 font-mono text-sm text-muted-foreground">{item.defaultValue || '-'}</td>
              <td className="py-3 text-muted-foreground">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}