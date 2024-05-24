interface UnitSelectionProps {
  selectedUnit: string
  onUnitChange: (newUnit: string) => void
}

export default function UnitSelection({ selectedUnit, onUnitChange }: UnitSelectionProps) {
  const units = ['Days', 'Weeks', 'Months', 'Years']

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitChange(e.target.value)
  }

  return (
    <select value={selectedUnit} onChange={handleChange}>
      {units.map((unit, index) => (
        <option key={index} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  )
}