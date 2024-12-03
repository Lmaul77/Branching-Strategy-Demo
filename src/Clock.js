import React, { useState, useEffect } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update the current time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Current Time</h1>
            <h2>
                {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </h2>
        </div>
    );
};

export default Clock;
