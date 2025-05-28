'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

import {
    trigger,
    triggerFocus,
    triggerHover,
    portal,
    viewPort,
    viewPortFocus,
    viewPortHover
} from './classes'

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
                <SelectPrimitive.Trigger className={`${trigger} ${triggerFocus} ${triggerHover}`}>
                    <SelectPrimitive.Value placeholder={placeholder || 'Select an option'} />
                </SelectPrimitive.Trigger>

                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content className={`${portal}`} side="bottom" align="start" sideOffset={5}>
                        <SelectPrimitive.Viewport>
                            {options.map((option, index) => (
                                <SelectPrimitive.Item key={index} value={option} className={`${viewPort} ${viewPortFocus} ${viewPortHover}`}>
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
