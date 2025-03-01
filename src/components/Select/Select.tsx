"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

interface SelectProps {
    options: string[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export default function Select({ options, value, onChange, placeholder }: SelectProps) {
    return (
        <SelectPrimitive.Root value={value} onValueChange={onChange}>
            <SelectPrimitive.Trigger
                className="flex items-center justify-center w-full px-4 py-2 border-none border-main bg-white rounded-md cursor-pointer
                    focus:outline-none focus-visible:outline-none"
            >
                <SelectPrimitive.Value placeholder={placeholder || "Select an option"} />
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content className="bg-main text-white rounded-md overflow-hidden">
                    <SelectPrimitive.Viewport>
                        {options.map((option, index) => (
                            <SelectPrimitive.Item
                                key={index}
                                value={option}
                                className="p-3 text-white cursor-pointer hover:bg-secondary transition-all focus:outline-none focus-visible:outline-none"
                            >
                                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator>
                                    <Check className="w-4 h-4 text-white" />
                                </SelectPrimitive.ItemIndicator>
                            </SelectPrimitive.Item>
                        ))}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}
