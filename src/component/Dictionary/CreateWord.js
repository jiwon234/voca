import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function CreateWord() {
    const days= useFetch(`http://localhost:3001/days`)
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`, {
                method: "POST", 
                headers: {
                    // header에는 데이터의 정보 타입을 설정한다. 
                    /// data의 정보타입이 application/json이라는 뜻이다.
                    "Content-Type": "application/json",  
                },
                body: JSON.stringify({
                    // json에 저장될 정보들
                    day: dayRef.current.value, 
                    eng: engRef.current.value, 
                    kor: korRef.current.value,
                    isDone: false
                }),
            }).then(res => {  // .then <- 동기?비동기? 잘 모르겠어
                if(res.ok) { // 뭔가 성공했을 경우
                    alert("생성이 완료 되었습니다.");
                    navigate(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            });
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit} className="m-3 w-full">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                    <div className="input_area" >
                        <label>Eng</label>
                        <input type="text" placeholder="computer" ref={engRef} /> {/*ref에 입력 데이터가 저장되는 것 같다.*/}
                    </div>
                    <div className="input_area">
                        <label>Kor</label>
                        <input type="text" placeholder="컴퓨터" ref={korRef} />
                    </div>
                    <div className="input_area">
                        <label>Day</label>
                        <select className="select_box w-full p-2 border" ref={dayRef} >
                            {days.map(day => (
                                <option key={day.id} value={day.day}>
                                    {day.day}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
            <button className="btn mt-5 bg-neutral-800 text-white hover:bg-neutral-600"
            style={{
                opacity: isLoading? 0.3:1,
            }}>{isLoading? "Saving...?" : "저장"}</button>
        </form>
    )
};
