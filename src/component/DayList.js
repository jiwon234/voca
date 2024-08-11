import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import QuizButton from "./QuizButton";

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <>
        <div className="m-2 p-3 rounded-lg shadow-lg text-lg font-bold">단어장</div>
            <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 m-2">
                {days.map(day => ( //days의 각 개체를 day라고 지칭 
                    <li key={day.id} className="h-24 rounded-lg shadow-lg hover:bg-gray-200 duration-100"> {/*key는 있는게 좋다네*/}
                        <Link to={`/day/${day.day}`}
                        className="text-lg flex items-center justify-center h-full w-full">Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            <QuizButton />
        </>
    );
}
