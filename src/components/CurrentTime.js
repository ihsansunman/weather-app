import React,{ useState, useEffect } from 'react';


function Time() {
    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
        const date = new Date();
        setTime(date.toLocaleTimeString());
        },1000)
    }, [])

    return (
        <div className="text-center text-white">
            <h4>Current Time: {time}</h4>
        </div>
    )
}

export default Time;
