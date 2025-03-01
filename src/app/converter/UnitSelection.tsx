import Select from "../../components/Select/Select"

interface UnitSelectionProps {
  label: string
  selectedUnit: string
  onUnitChange: (newUnit: string) => void
}

export default function UnitSelection({ selectedUnit, onUnitChange }: UnitSelectionProps) {
  const units = ["Hours", "Days", "Weeks", "Months", "Years"]

  return (
    <div className="w-full flex justify-center items-center ">
      <Select
        options={units}
        value={selectedUnit}
        onChange={onUnitChange}
        placeholder="Choose a unit"
      />
    </div>
  )
}
