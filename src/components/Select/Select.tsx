'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectProps {
    options: string[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export default function Select({ options, value, onChange, placeholder }: SelectProps) {
    return (
        <SelectPrimitive.Root value={value} onValueChange={onChange}>
            <div className="relative">
                <SelectPrimitive.Trigger
                    className="flex items-center justify-center w-auto px-4 py-2 border border-transparent bg-white rounded-md cursor-pointer
                        focus:outline-none focus-visible:outline-none hover:border-secondary"
                >
                    <SelectPrimitive.Value placeholder={placeholder || 'Select an option'} />
                </SelectPrimitive.Trigger>

                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content
                        className="absolute left-0 mt-1 bg-main text-white rounded-md overflow-hidden shadow-lg z-50 w-auto"
                        side="bottom"
                        align="start"
                        sideOffset={5}
                    >
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
            </div>
        </SelectPrimitive.Root>
    )
}
