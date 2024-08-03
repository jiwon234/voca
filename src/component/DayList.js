import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <ul className="list_day">
            {days.map(day => ( //days의 각 개체를 day라고 지칭 
                <li key={day.id}> {/*key는 있는게 좋다네*/}
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}
