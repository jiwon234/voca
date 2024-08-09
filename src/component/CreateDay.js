import useFetch from "../hooks/useFetch"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
    
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function addDay() {
        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1, 
                isDone: false
            }),
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다.");
                navigate(`/`);
            }
        });
    }
    return (
        <div className="m-3">
            <h3 className="text-lg mb-3 font-semibold">현재 일수: {days.length}일</h3>
            <button onClick={addDay} className="btn">Day 추가</button>
        </div>
    )
};
