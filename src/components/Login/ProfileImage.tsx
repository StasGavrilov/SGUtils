import React from 'react';
import Image from 'next/image';

interface ProfileImageProps {
    onClick: () => void;
    hoverText: string;
}

export default function ProfileImage({ onClick, hoverText }: ProfileImageProps) {
    return (
        <div className='flex items-center justify-center flex-col'>
            <div className="relative group">
                <Image
                    src="/pictures/login-pic.jpg"
                    alt="emblem"
                    width={50}
                    height={50}
                    className="rounded-full"
                    onClick={onClick}
                />
                <div className="absolute hidden group-hover:flex flex-col items-center bottom-full mb-2 w-full">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md w-[100px] text-center">
                        {hoverText}
                    </span>
                </div>
            </div>
        </div>
    );
}
