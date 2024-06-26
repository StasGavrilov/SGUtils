'use client'

import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import RightWing from '@/components/RightWing/RightWing'

interface IAddMonth {
    handleSubmit: () => void
}

export default function AddMonth({ handleSubmit }: IAddMonth) {
    const [isRightWingOpen, setIsRightWingOpen] = useState(false)

    const openRightWing = () => setIsRightWingOpen(true)
    const closeRightWing = () => setIsRightWingOpen(false)

    return (
        <div>
            <button className='bg-main p-1 m-1 w-40 h-9 flex justify-center items-center rounded hover:bg-secondary text-white' onClick={openRightWing}>
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                New month
            </button>

            <RightWing isOpen={isRightWingOpen} closeWing={closeRightWing} handleSubmit={handleSubmit} title={'Add new month!'} />
        </div>
    )
}
