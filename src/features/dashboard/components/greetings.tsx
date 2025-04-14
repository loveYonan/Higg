"use client"
import { format } from 'date-fns';
import { useEffect, useState } from 'react';



const Greeting = () => {

    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    const currentHour = parseInt(format(new Date(), 'H')); // Gets the current hour in 24-hour format

    const getGreeting = () => {
        if (currentHour >= 5 && currentHour < 12) {
            return 'Good Morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };

    return <h1>{getGreeting()}</h1>;
};

export default Greeting;