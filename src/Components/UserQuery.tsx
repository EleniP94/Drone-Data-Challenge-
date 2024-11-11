/**  @format */

import React, { useState, useEffect } from 'react';

export default function UserQuery() {
    const [Query, setQuery] = useState([]);
    const [error, setError] = useState('');

    type userInput = {
        user_i: string;
    };

    async function fetchDroneDetails() {
        try{
            const url =  `${process.env.Drone_Key}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to retrieve data from the API");
            }

            const data: userInput[] = await response.json();
            setQuery(data);
            console.log("Query data fetched:", data);
            
            fetchDroneDetails(data.map((review) => review.user_i));
        } catch (error: unknown) {
            console.error("Error fetching reviews:", error);
            setError("Failed to load reviews.");
        }
    }

    useEffect(() => {
        fetchDroneDetails();
    }, [imageId]);

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <input
            type = "text"
            value = {value}
            onChange = {(e) => setValue(e.target.value)}
            />
        </div>
    );
}

