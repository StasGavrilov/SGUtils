interface UnitSelectionProps {
  label: string
  selectedUnit: string
  onUnitChange: (newUnit: string) => void
}

export default function UnitSelection({ label, selectedUnit, onUnitChange }: UnitSelectionProps) {
  const units = ['Hours', 'Days', 'Weeks', 'Months', 'Years']

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitChange(e.target.value)
  }

  return (
    <div>
      <select value={selectedUnit} onChange={handleChange}>
        {units.map((unit, index) => (
          <option key={index} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  )
}