import useFetch from "../hooks/useFetch"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateDay() {
    
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [goIndex, setGoIndex] = useState(false);

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
                if (goIndex) {
                    navigate(`/`);
                }
            }
        });
    }

    const handleCheckboxChange = (e) => {
        setGoIndex(e.target.checked);
        console.log('goIndex 상태가 변경되었습니다:', e.target.checked);
    };

    return (
        <div className="m-3">
            <h3 className="text-lg mb-3 font-semibold">현재 일수: {days.length}일</h3>
            <div className="flex flex-col">
                <button onClick={addDay} className="btn w-28 mb-2">Day 추가</button>
                <div className="flex flex-row"><input type="checkbox" checked={goIndex} onChange={handleCheckboxChange}/><div className="text-sm ms-1"> 추가 후 메인화면으로 이동</div></div>
            </div>
        </div>
    )
};
