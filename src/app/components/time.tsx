"use client";
import { useState, useEffect } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentTime(new Date());

        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (!currentTime) {
        return null;
    }

    return (
        <div className="md:flex items-center space-x-2 text-sm font-extralight hidden fixed ">
            <p className="">Dusseldorf,</p>
            <span className='-mb-[3px] font-HelveticaNeue'>{currentTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</span>
        </div>
    );
}
