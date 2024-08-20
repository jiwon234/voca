import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import QuizList from "../Quiz/QuizList";
import { useParams } from "react-router-dom";

export default function DayList() {
    const days = useFetch(`http://localhost:3001/days`);

    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words`);

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    function calculateProgress(temp) {
        console.log(`temp: ${temp}`)
        const dayItems = words.filter(item => item.day == temp) //item들 중에서 현재 day랑 같은 것만 뽑아냄
        console.log(`dayItems: ${dayItems}`);
        const doneItemsCount = dayItems.filter(item => item.isDone).length; //item.isDone이 true인 것만 length 구함 
        console.log(`doneItemsCount: ${doneItemsCount}`);
        
        const totalItemsCount = dayItems.length; // day가 같은 것들의 length를 구합니다. 
        console.log(`totalItemsCount: ${totalItemsCount}`);
        const donePercentage = totalItemsCount > 0 ? (doneItemsCount / totalItemsCount) * 100: 0;
        console.log(`Day에서 완료된 항목의 비율: ${donePercentage}%`);

        return donePercentage;
    }



    return (
        <>
        <div className="m-2 mb-4 p-3 rounded-lg shadow-lg text-lg font-bold">단어장</div>
            <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 m-2 mb-6">
                {days.map(d => ( //days의 각 개체를 day라고 지칭 
                    <li key={d.id} className="h-24 rounded-lg shadow-lg hover:bg-gray-200 duration-100"> {/*key는 있는게 좋다네*/}
                        <Link to={`/day/${d.day}`}
                        className="text-lg flex flex-col items-center justify-center h-full w-full progress">Day {d.day}

                        <div className="mt-3 w-20 bg-gray-200 rounded-full h-1.5 dark:bg-gray-300">
                            <div className="bg-blue-600 h-1.5 rounded-full" style={{width: `${calculateProgress(d.day)}%`}}></div>
                        </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <QuizList />
        </>
    );
}